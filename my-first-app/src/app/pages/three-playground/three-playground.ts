import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface QuoteRecord {
  id: string;
  slug: string;
  quote: string;
  author: string;
  tags: string[];
  word_count: number;
  char_count: number;
  length: string;
}

/** Lists quote bundle files relative to `/quotes/`. Edit to add/remove category files. */
interface QuotesManifest {
  version?: number;
  sources: string[];
}

/** Canonical cluster ids matching `quotes/categories/*.json` tag names; anything else ⇒ general hub. */
type QuoteClusterId = 'general' | 'stoicism' | 'taoism' | 'buddhism' | 'existentialism';

const QUOTE_CLUSTER_ORDER: readonly QuoteClusterId[] = [
  'general',
  'stoicism',
  'taoism',
  'buddhism',
  'existentialism',
];

const CLUSTER_HUB_COLOR: Record<QuoteClusterId, string> = {
  general: '#4f6cae',
  stoicism: '#5fa8dc',
  taoism: '#5eb89a',
  buddhism: '#c8935f',
  existentialism: '#9b72cf',
};

/** Procedural hub textures — one theme per cluster so you can compare vibes in-scene. */
type HubTextureTheme = 'nebula' | 'marble' | 'water' | 'woven' | 'crystal';

const CLUSTER_HUB_TEXTURE: Record<QuoteClusterId, HubTextureTheme> = {
  general: 'nebula',
  stoicism: 'marble',
  taoism: 'water',
  buddhism: 'woven',
  existentialism: 'crystal',
};

/** Corner satellites (general stays at origin). Order maps to far “corners” of the volume. */
const CLUSTER_CORNER: Record<
  Exclude<QuoteClusterId, 'general'>,
  readonly [number, number, number]
> = {
  stoicism: [1, 1, 1],
  taoism: [-1, -0.85, 1],
  buddhism: [1, -0.9, -1],
  existentialism: [-1, 1, -1],
};

@Component({
  selector: 'app-three-playground',
  imports: [],
  templateUrl: './three-playground.html',
  styleUrl: './three-playground.scss',
})
export class ThreePlayground implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) private canvasContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('quoteTooltip', { static: true }) private quoteTooltipRef!: ElementRef<HTMLDivElement>;
  @ViewChild('tooltipQuote', { static: true }) private tooltipQuoteRef!: ElementRef<HTMLParagraphElement>;
  @ViewChild('tooltipAuthor', { static: true }) private tooltipAuthorRef!: ElementRef<HTMLParagraphElement>;

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private controls?: OrbitControls;
  private starMaterial?: THREE.PointsMaterial;
  private orbitPivots: THREE.Object3D[] = [];
  private orbitBodies: THREE.Mesh[] = [];
  private ambientSpheres: THREE.Mesh[] = [];
  private quoteGroup?: THREE.Group;
  private readonly quoteOrbitPivots: THREE.Object3D[] = [];
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointerNdc = new THREE.Vector2(1, 1);
  private readonly worldPosScratch = new THREE.Vector3();
  private hoveredQuoteMesh: THREE.Mesh | null = null;
  private readonly disposables: Array<THREE.BufferGeometry | THREE.Material | THREE.Texture> = [];
  private readonly clock = new THREE.Clock();
  private frameId?: number;
  /** WASD / arrow movement; values: forward, back, left, right */
  private readonly keysPressed = new Set<'forward' | 'back' | 'left' | 'right'>();
  private readonly moveScratch = {
    forward: new THREE.Vector3(),
    right: new THREE.Vector3(),
    delta: new THREE.Vector3(),
  };

  constructor(private readonly ngZone: NgZone) { }

  ngAfterViewInit(): void {
    const host = this.canvasContainer.nativeElement;
    const width = host.clientWidth || 900;
    const height = host.clientHeight || 540;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#0b1020');

    this.camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 2000);
    /** Initial placeholder; `frameClustersInView()` sets the real pose after quotes load. */
    this.camera.position.set(0, 1.2, 14);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    host.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.enableRotate = false;
    this.controls.enablePan = true;
    // Default LEFT = rotate (disabled above); bind left drag to pan so click-drag traverses the scene.
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN,
    };
    this.controls.minDistance = 1.25;
    this.controls.maxDistance = 120;
    this.controls.update();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    const directionalLight = new THREE.DirectionalLight(0x9ec8ff, 1.3);
    directionalLight.position.set(2, 3, 4);
    this.scene.add(ambientLight, directionalLight);

    this.createStarscape();
    // this.createOrbitSystem();
    // this.createAmbientSpheres();
    this.loadQuotesAndCreateSpheres();

    window.addEventListener('resize', this.onResize);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    const canvas = this.renderer.domElement;
    this.ngZone.runOutsideAngular(() => {
      canvas.addEventListener('pointermove', this.onPointerMove);
      canvas.addEventListener('pointerleave', this.onPointerLeave);
      this.animate();
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    this.renderer?.domElement.removeEventListener('pointermove', this.onPointerMove);
    this.renderer?.domElement.removeEventListener('pointerleave', this.onPointerLeave);
    this.controls?.dispose();
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }

    for (const item of this.disposables) {
      item.dispose();
    }

    this.renderer?.dispose();
  }

  private readonly onResize = (): void => {
    if (!this.renderer || !this.camera) {
      return;
    }

    const host = this.canvasContainer.nativeElement;
    const width = host.clientWidth || 900;
    const height = host.clientHeight || 540;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  private readonly onKeyDown = (event: KeyboardEvent): void => {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keysPressed.add('forward');
        event.preventDefault();
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keysPressed.add('back');
        event.preventDefault();
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keysPressed.add('left');
        event.preventDefault();
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keysPressed.add('right');
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  private readonly onKeyUp = (event: KeyboardEvent): void => {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keysPressed.delete('forward');
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keysPressed.delete('back');
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keysPressed.delete('left');
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keysPressed.delete('right');
        break;
      default:
        break;
    }
  };

  /** Slide camera and look-at target on the XZ plane (wheel zoom still changes distance). */
  private applyKeyboardMovement(delta: number): void {
    if (!this.camera || !this.controls || this.keysPressed.size === 0) {
      return;
    }

    const moveSpeed = 3.2;
    const { forward, right, delta: moveDelta } = this.moveScratch;

    forward.subVectors(this.controls.target, this.camera.position);
    forward.y = 0;
    if (forward.lengthSq() < 1e-8) {
      forward.set(0, 0, -1);
    } else {
      forward.normalize();
    }

    right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

    moveDelta.set(0, 0, 0);
    if (this.keysPressed.has('forward')) {
      moveDelta.add(forward);
    }
    if (this.keysPressed.has('back')) {
      moveDelta.sub(forward);
    }
    if (this.keysPressed.has('right')) {
      moveDelta.add(right);
    }
    if (this.keysPressed.has('left')) {
      moveDelta.sub(right);
    }

    if (moveDelta.lengthSq() === 0) {
      return;
    }

    moveDelta.normalize().multiplyScalar(moveSpeed * delta);
    this.camera.position.add(moveDelta);
    this.controls.target.add(moveDelta);
  }

  private readonly onPointerMove = (event: PointerEvent): void => {
    if (!this.renderer || !this.camera || !this.quoteGroup) {
      return;
    }

    const canvas = this.renderer.domElement;
    const rect = canvas.getBoundingClientRect();
    this.pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointerNdc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const hits = this.raycaster.intersectObjects(this.quoteGroup.children, true);
    const first = hits.find((h) => h.object instanceof THREE.Mesh && typeof h.object.userData['quote'] === 'string')
      ?.object;

    if (first instanceof THREE.Mesh && typeof first.userData['quote'] === 'string') {
      if (this.hoveredQuoteMesh !== first) {
        this.hoveredQuoteMesh = first;
        const quoteEl = this.tooltipQuoteRef.nativeElement;
        const authorEl = this.tooltipAuthorRef.nativeElement;
        quoteEl.textContent = first.userData['quote'] as string;
        authorEl.textContent = first.userData['author'] as string;
        this.quoteTooltipRef.nativeElement.setAttribute('aria-hidden', 'false');
      }
    } else if (this.hoveredQuoteMesh) {
      this.clearQuoteHover();
    }
  };

  private readonly onPointerLeave = (): void => {
    this.clearQuoteHover();
  };

  private clearQuoteHover(): void {
    this.hoveredQuoteMesh = null;
    this.quoteTooltipRef.nativeElement.classList.remove('is-visible');
    this.quoteTooltipRef.nativeElement.setAttribute('aria-hidden', 'true');
  }

  private updateQuoteTooltipPosition(): void {
    const tooltip = this.quoteTooltipRef.nativeElement;
    if (!this.renderer || !this.camera || !this.hoveredQuoteMesh) {
      tooltip.classList.remove('is-visible');
      return;
    }

    this.hoveredQuoteMesh.getWorldPosition(this.worldPosScratch);
    this.worldPosScratch.project(this.camera);

    const canvas = this.renderer.domElement;
    const rect = canvas.getBoundingClientRect();
    const x = rect.left + (this.worldPosScratch.x * 0.5 + 0.5) * rect.width;
    const y = rect.top + (-this.worldPosScratch.y * 0.5 + 0.5) * rect.height;

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.classList.add('is-visible');
  }

  private animate(): void {
    if (!this.renderer || !this.scene || !this.camera) {
      return;
    }

    const delta = Math.min(this.clock.getDelta(), 0.05);
    const t = this.clock.getElapsedTime();
    const motionPaused = this.hoveredQuoteMesh !== null;

    if (!motionPaused) {
      if (this.starMaterial) {
        // Subtle global twinkle for the starfield.
        this.starMaterial.opacity = 0.42 + 0.18 * (0.5 + 0.5 * Math.sin(t * 0.9));
      }

      for (let i = 0; i < this.orbitPivots.length; i += 1) {
        this.orbitPivots[i].rotation.y += 0.003 + i * 0.0007;
        this.orbitPivots[i].rotation.x = Math.sin(t * 0.3 + i) * 0.1;
      }

      for (let i = 0; i < this.ambientSpheres.length; i += 1) {
        const sphere = this.ambientSpheres[i];
        const pulse = 0.92 + 0.08 * Math.sin(t * 0.8 + i * 0.6);
        sphere.scale.setScalar(pulse);
      }

      const orbitSpeed = 0.32;
      for (const pivot of this.quoteOrbitPivots) {
        pivot.rotation.y += orbitSpeed * delta;
      }
    }

    this.applyKeyboardMovement(delta);
    this.updateQuoteTooltipPosition();

    this.controls?.update();
    this.renderer.render(this.scene, this.camera);
    this.frameId = requestAnimationFrame(() => this.animate());
  }

  private createStarscape(): void {
    if (!this.scene) {
      return;
    }

    const starCount = 1300;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const i3 = i * 3;
      positions[i3] = THREE.MathUtils.randFloatSpread(60);
      positions[i3 + 1] = THREE.MathUtils.randFloatSpread(38);
      positions[i3 + 2] = THREE.MathUtils.randFloatSpread(60);
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.starMaterial = new THREE.PointsMaterial({
      color: '#d5e8ff',
      size: 0.055,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });

    const stars = new THREE.Points(starGeometry, this.starMaterial);
    this.disposables.push(starGeometry, this.starMaterial);
    this.scene.add(stars);
  }

  private createOrbitSystem(): void {
    if (!this.scene) {
      return;
    }

    const orbitConfig = [
      { radius: 1.6, size: 0.12, color: '#d7ecff', speedOffset: 0 },
      { radius: 2.3, size: 0.16, color: '#9ad6ff', speedOffset: 1 },
      { radius: 3.1, size: 0.2, color: '#77c5ff', speedOffset: 2 },
    ];

    for (const config of orbitConfig) {
      const pivot = new THREE.Object3D();
      pivot.rotation.y = Math.random() * Math.PI * 2;

      const geometry = new THREE.SphereGeometry(config.size, 24, 24);
      const material = new THREE.MeshStandardMaterial({
        color: config.color,
        emissive: config.color,
        emissiveIntensity: 0.2,
        metalness: 0.15,
        roughness: 0.65,
      });

      const body = new THREE.Mesh(geometry, material);
      body.position.set(config.radius, 0, 0);
      body.userData['speedOffset'] = config.speedOffset;

      this.disposables.push(geometry, material);
      pivot.add(body);
      this.scene.add(pivot);
      this.orbitPivots.push(pivot);
      this.orbitBodies.push(body);
    }
  }

  private createAmbientSpheres(): void {
    if (!this.scene) {
      return;
    }

    const geometry = new THREE.SphereGeometry(0.04, 12, 12);
    const material = new THREE.MeshStandardMaterial({
      color: '#c4e0ff',
      emissive: '#8ac5ff',
      emissiveIntensity: 0.15,
      roughness: 0.9,
    });
    this.disposables.push(geometry, material);

    for (let i = 0; i < 36; i += 1) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        THREE.MathUtils.randFloatSpread(12),
        THREE.MathUtils.randFloatSpread(8),
        THREE.MathUtils.randFloatSpread(10),
      );
      this.scene.add(mesh);
      this.ambientSpheres.push(mesh);
    }
  }

  private loadQuotesAndCreateSpheres(): void {
    const quotesBase = './quotes/';

    void fetch(`${quotesBase}manifest.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load quote manifest (${response.status})`);
        }
        return response.json() as Promise<QuotesManifest>;
      })
      .then((manifest) =>
        Promise.all(
          manifest.sources.map((relativePath) => {
            const url = `${quotesBase}${relativePath.replace(/^\/+/, '')}`;
            return fetch(url).then((r) => {
              if (!r.ok) {
                throw new Error(`Failed to load quote bundle (${r.status}): ${url}`);
              }
              return r.json() as Promise<QuoteRecord[]>;
            });
          }),
        ),
      )
      .then((bundles) => {
        if (!this.scene) {
          return;
        }

        const quotes = bundles.flat();
        quotes.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

        const seenIds = new Set<string>();
        for (const q of quotes) {
          if (seenIds.has(q.id)) {
            console.warn(`Duplicate quote id in merged bundles: ${q.id}`);
          }
          seenIds.add(q.id);
        }

        this.createQuoteSpheres(quotes);
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  }

  /** Map record tags (first tag) to a cluster hub; empties ⇒ general bucket. */
  private quoteClusterId(q: QuoteRecord): QuoteClusterId {
    const t = q.tags?.[0];
    if (
      typeof t === 'string' &&
      (QUOTE_CLUSTER_ORDER as readonly string[]).includes(t as QuoteClusterId)
    ) {
      return t as QuoteClusterId;
    }
    return 'general';
  }

  /**
   * Hub size scales gently with quote count. General uses a **low hard cap** so it never
   * overwhelms the corner constellations; satellites keep a slightly higher relative cap.
   */
  private clusterHubRadius(catId: QuoteClusterId, n: number): number {
    const count = Math.max(n, 1);
    if (catId === 'general') {
      const base = 0.25;
      const cap = 0.72;
      const blend =
        0.5 * (Math.sqrt(count / 88) * 0.38) + 0.5 * (Math.log1p(count) * 0.095);
      return THREE.MathUtils.clamp(base + blend, base, cap);
    }
    const ref = 34;
    const base = 0.2;
    const cap = 0.95;
    const grow = (Math.sqrt(count) / Math.sqrt(ref)) * 0.4;
    return THREE.MathUtils.clamp(base + grow, base, cap);
  }

  /** Fit every cluster (and its orbits) in the opening shot. */
  private frameClustersInView(): void {
    if (!this.camera || !this.controls || !this.renderer || !this.quoteGroup) {
      return;
    }
    if (this.quoteGroup.children.length === 0) {
      return;
    }

    this.quoteGroup.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(this.quoteGroup);
    const size = box.getSize(new THREE.Vector3());
    if (!Number.isFinite(size.x) || size.x < 1e-6) {
      return;
    }

    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const center = sphere.center;
    const radius = Math.max(sphere.radius, 0.6);

    const vFov = THREE.MathUtils.degToRad(this.camera.fov);
    const distV = radius / Math.tan(vFov / 2);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * this.camera.aspect);
    const distH = radius / Math.tan(hFov / 2);
    let distance = Math.max(distV, distH) * 1.16;

    distance = THREE.MathUtils.clamp(distance, 6, 95);

    const dir = new THREE.Vector3(0.22, 0.16, 1).normalize();
    this.camera.position.copy(center.clone().add(dir.multiplyScalar(distance)));

    this.camera.near = Math.max(0.06, distance * 0.0015);
    this.camera.far = Math.max(distance * 40, 800);
    this.camera.updateProjectionMatrix();

    this.controls.target.copy(center);
    this.controls.maxDistance = Math.max(96, distance * 2.4);
    this.controls.update();
  }

  private createQuoteSpheres(quotes: QuoteRecord[]): void {
    if (!this.scene || quotes.length === 0) {
      return;
    }

    this.quoteOrbitPivots.length = 0;

    const root = new THREE.Group();
    this.quoteGroup = root;
    this.scene.add(root);

    const byCat = new Map<QuoteClusterId, QuoteRecord[]>();
    for (const id of QUOTE_CLUSTER_ORDER) {
      byCat.set(id, []);
    }
    for (const q of quotes) {
      byCat.get(this.quoteClusterId(q))!.push(q);
    }

    const cornerRadius = 8.85;

    for (let ci = 0; ci < QUOTE_CLUSTER_ORDER.length; ci += 1) {
      const catId = QUOTE_CLUSTER_ORDER[ci];
      const list = byCat.get(catId)!;
      if (list.length === 0) {
        continue;
      }

      const cluster = new THREE.Group();
      cluster.name = `quotes-${catId}`;

      if (catId === 'general') {
        cluster.position.set(0, 0, 0);
      } else {
        const [kx, ky, kz] = CLUSTER_CORNER[catId];
        cluster.position.set(
          kx * cornerRadius,
          ky * cornerRadius * 0.55,
          kz * cornerRadius,
        );
      }
      root.add(cluster);

      const n = list.length;
      const hubRadius = this.clusterHubRadius(catId, n);
      const hubSeg = THREE.MathUtils.clamp(Math.floor(26 + Math.sqrt(n) * 1.35), 24, 48);
      const hubGeom = new THREE.SphereGeometry(hubRadius, hubSeg, hubSeg);
      const hubTexture = this.createHubProceduralTexture(CLUSTER_HUB_TEXTURE[catId]);
      const hubTint = new THREE.Color(CLUSTER_HUB_COLOR[catId]);
      const hubMat = new THREE.MeshStandardMaterial({
        map: hubTexture,
        color: '#ffffff',
        emissive: hubTint,
        emissiveIntensity: 0.1 + 0.04 * Math.min(1, n / 180),
        metalness: 0.42,
        roughness: 0.34,
      });
      this.disposables.push(hubGeom, hubMat, hubTexture);
      const hub = new THREE.Mesh(hubGeom, hubMat);
      hub.userData['clusterId'] = catId;
      cluster.add(hub);

      const charMin = Math.min(...list.map((q) => q.char_count));
      const charMax = Math.max(...list.map((q) => q.char_count));
      const charSpan = Math.max(1, charMax - charMin);

      /** More quotes ⇒ more orbital shells so constellations “breathe” with size. */
      const shellCeil = catId === 'general' ? 13 : 9;
      const perShell =
        catId === 'general' ? 22 + 48 / Math.max(hubRadius, 0.4) : 16 + 30 / Math.max(hubRadius, 0.3);
      const shellCount = THREE.MathUtils.clamp(Math.ceil(n / perShell), 1, shellCeil);
      const innerGap =
        hubRadius * 0.55 + 0.44 + Math.sqrt(Math.max(n, 1)) * (catId === 'general' ? 0.032 : 0.026);
      const shellStep = THREE.MathUtils.clamp(
        (catId === 'general' ? 0.19 : 0.15) + hubRadius * 0.07 + (n > 80 ? 0.04 : 0),
        0.13,
        0.44,
      );
      const shellRadii: number[] = [];
      for (let s = 0; s < shellCount; s += 1) {
        shellRadii.push(innerGap + s * shellStep);
      }

      const crowd = THREE.MathUtils.clamp(n / (catId === 'general' ? 240 : 85), 0, 1);
      const radiusMin = 0.03 - crowd * 0.006;
      const radiusMax = 0.105 - crowd * 0.028;

      const golden = Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < n; i += 1) {
        const quote = list[i];
        const tChar = charSpan > 0 ? (quote.char_count - charMin) / charSpan : 0.5;
        const microR = radiusMin + tChar * (radiusMax - radiusMin);

        const geometry = new THREE.SphereGeometry(microR, 20, 20);
        const hue = this.stringToHue(quote.id);
        const color = new THREE.Color().setHSL(hue, 0.6, 0.57);
        const material = new THREE.MeshStandardMaterial({
          color,
          emissive: color.clone().multiplyScalar(0.32),
          emissiveIntensity: 0.42,
          metalness: 0.2,
          roughness: 0.5,
        });

        const mesh = new THREE.Mesh(geometry, material);
        const shellIndex = i % shellCount;
        const orbitR = shellRadii[shellIndex] ?? innerGap;
        mesh.position.set(orbitR, 0, 0);
        mesh.userData['quoteId'] = quote.id;
        mesh.userData['slug'] = quote.slug;
        mesh.userData['quote'] = quote.quote;
        mesh.userData['author'] = quote.author;
        mesh.userData['clusterId'] = catId;

        const pivot = new THREE.Object3D();
        const yTurn = golden * i + shellIndex * 0.85;
        pivot.rotation.y = yTurn;
        pivot.rotation.x = Math.sin(yTurn * 0.68) * (catId === 'general' ? 0.36 : 0.26);
        pivot.add(mesh);

        this.disposables.push(geometry, material);
        cluster.add(pivot);
        this.quoteOrbitPivots.push(pivot);
      }
    }

    this.frameClustersInView();
  }

  private stringToHue(input: string): number {
    let hash = 0;
    for (let i = 0; i < input.length; i += 1) {
      hash = (hash * 31 + input.charCodeAt(i)) | 0;
    }
    return (Math.abs(hash) % 360) / 360;
  }

  private createHubProceduralTexture(theme: HubTextureTheme): THREE.CanvasTexture {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      const fallback = new THREE.CanvasTexture(canvas);
      this.disposables.push(fallback);
      return fallback;
    }

    switch (theme) {
      case 'nebula':
        this.drawNebulaHubTexture(ctx, size);
        break;
      case 'marble':
        this.drawMarbleHubTexture(ctx, size);
        break;
      case 'water':
        this.drawWaterHubTexture(ctx, size);
        break;
      case 'woven':
        this.drawWovenHubTexture(ctx, size);
        break;
      case 'crystal':
        this.drawCrystalHubTexture(ctx, size);
        break;
      default:
        break;
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  private drawNebulaHubTexture(ctx: CanvasRenderingContext2D, size: number): void {
    const gradient = ctx.createRadialGradient(size * 0.38, size * 0.34, size * 0.04, size * 0.5, size * 0.5, size * 0.62);
    gradient.addColorStop(0, '#8b5cf6');
    gradient.addColorStop(0.35, '#3b4fd8');
    gradient.addColorStop(0.72, '#0f1a4a');
    gradient.addColorStop(1, '#050812');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    for (let i = 0; i < 900; i += 1) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = Math.random() * 2.2;
      ctx.fillStyle = `rgba(210, 230, 255, ${0.08 + Math.random() * 0.35})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalCompositeOperation = 'screen';
    const bloom = ctx.createRadialGradient(size * 0.62, size * 0.28, 0, size * 0.62, size * 0.28, size * 0.34);
    bloom.addColorStop(0, 'rgba(255, 120, 220, 0.55)');
    bloom.addColorStop(1, 'rgba(255, 120, 220, 0)');
    ctx.fillStyle = bloom;
    ctx.fillRect(0, 0, size, size);
    ctx.globalCompositeOperation = 'source-over';
  }

  private drawMarbleHubTexture(ctx: CanvasRenderingContext2D, size: number): void {
    ctx.fillStyle = '#d8e4ef';
    ctx.fillRect(0, 0, size, size);

    for (let layer = 0; layer < 14; layer += 1) {
      ctx.strokeStyle = `rgba(${90 + layer * 4}, ${120 + layer * 3}, ${160 + layer * 2}, ${0.08 + layer * 0.015})`;
      ctx.lineWidth = 1.2 + layer * 0.15;
      ctx.beginPath();
      for (let x = 0; x <= size; x += 6) {
        const y =
          size * 0.5 +
          Math.sin(x * 0.018 + layer * 0.7) * (size * 0.18) +
          Math.sin(x * 0.041 - layer) * (size * 0.07);
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
    ctx.fillRect(0, 0, size, size);
  }

  private drawWaterHubTexture(ctx: CanvasRenderingContext2D, size: number): void {
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#0d3d4a');
    gradient.addColorStop(0.5, '#1a7a82');
    gradient.addColorStop(1, '#0a2f38');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const cx = size * 0.5;
    const cy = size * 0.5;
    for (let ring = 0; ring < 22; ring += 1) {
      const radius = ring * (size / 24) + size * 0.04;
      ctx.strokeStyle = `rgba(180, 255, 245, ${0.05 + (ring % 3) * 0.04})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    for (let i = 0; i < 120; i += 1) {
      const angle = (i / 120) * Math.PI * 2;
      const dist = (i % 7) * (size / 16);
      const x = cx + Math.cos(angle) * dist;
      const y = cy + Math.sin(angle) * dist;
      ctx.fillStyle = 'rgba(220, 255, 250, 0.12)';
      ctx.fillRect(x, y, 2, 2);
    }
  }

  private drawWovenHubTexture(ctx: CanvasRenderingContext2D, size: number): void {
    ctx.fillStyle = '#6b4423';
    ctx.fillRect(0, 0, size, size);

    const step = 14;
    for (let x = -size; x < size * 2; x += step) {
      ctx.strokeStyle = 'rgba(220, 170, 95, 0.35)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + size, size);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(140, 90, 45, 0.45)';
      ctx.beginPath();
      ctx.moveTo(x, size);
      ctx.lineTo(x + size, 0);
      ctx.stroke();
    }

    ctx.fillStyle = 'rgba(255, 210, 140, 0.12)';
    ctx.fillRect(0, 0, size, size);
  }

  private drawCrystalHubTexture(ctx: CanvasRenderingContext2D, size: number): void {
    ctx.fillStyle = '#1a1030';
    ctx.fillRect(0, 0, size, size);

    const palette = ['#c084fc', '#a855f7', '#7c3aed', '#5b21b6', '#ddd6fe'];
    const cols = 8;
    const rows = 8;
    const cellW = size / cols;
    const cellH = size / rows;

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const x = col * cellW;
        const y = row * cellH;
        const shade = palette[(row + col) % palette.length];
        ctx.fillStyle = shade;
        ctx.beginPath();
        ctx.moveTo(x + cellW * 0.5, y);
        ctx.lineTo(x + cellW, y + cellH * 0.5);
        ctx.lineTo(x + cellW * 0.5, y + cellH);
        ctx.lineTo(x, y + cellH * 0.5);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
}
