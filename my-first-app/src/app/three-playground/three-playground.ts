import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import * as THREE from 'three';

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
  private centerSphere?: THREE.Mesh;
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
  private readonly disposables: Array<THREE.BufferGeometry | THREE.Material> = [];
  private readonly clock = new THREE.Clock();
  private frameId?: number;

  constructor(private readonly ngZone: NgZone) { }

  ngAfterViewInit(): void {
    const host = this.canvasContainer.nativeElement;
    const width = host.clientWidth || 900;
    const height = host.clientHeight || 540;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#0b1020');

    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 4);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    host.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    const directionalLight = new THREE.DirectionalLight(0x9ec8ff, 1.3);
    directionalLight.position.set(2, 3, 4);
    this.scene.add(ambientLight, directionalLight);

    const centerGeometry = new THREE.SphereGeometry(0.65, 48, 48);
    const centerMaterial = new THREE.MeshStandardMaterial({
      color: '#58a6ff',
      emissive: '#12364e',
      metalness: 0.28,
      roughness: 0.42,
    });
    this.disposables.push(centerGeometry, centerMaterial);
    this.centerSphere = new THREE.Mesh(centerGeometry, centerMaterial);
    this.scene.add(this.centerSphere);

    this.createStarscape();
    this.createOrbitSystem();
    // this.createAmbientSpheres();
    this.loadQuotesAndCreateSpheres();

    window.addEventListener('resize', this.onResize);
    const canvas = this.renderer.domElement;
    this.ngZone.runOutsideAngular(() => {
      canvas.addEventListener('pointermove', this.onPointerMove);
      canvas.addEventListener('pointerleave', this.onPointerLeave);
      this.animate();
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    this.renderer?.domElement.removeEventListener('pointermove', this.onPointerMove);
    this.renderer?.domElement.removeEventListener('pointerleave', this.onPointerLeave);
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
    if (!this.renderer || !this.scene || !this.camera || !this.centerSphere) {
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

    this.updateQuoteTooltipPosition();

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
    void fetch('/quotes/quotes.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load quotes (${response.status})`);
        }
        return response.json() as Promise<QuoteRecord[]>;
      })
      .then((quotes) => {
        if (!this.scene) {
          return;
        }
        this.createQuoteSpheres(quotes);
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  }

  private createQuoteSpheres(quotes: QuoteRecord[]): void {
    if (!this.scene || quotes.length === 0) {
      return;
    }

    this.quoteOrbitPivots.length = 0;

    const group = new THREE.Group();
    this.quoteGroup = group;
    this.scene.add(group);

    const orbitRadius = 1.48;
    const n = quotes.length;

    const charMin = Math.min(...quotes.map((q) => q.char_count));
    const charMax = Math.max(...quotes.map((q) => q.char_count));
    const charSpan = Math.max(1, charMax - charMin);
    const radiusMin = 0.042;
    const radiusMax = 0.13;

    for (let i = 0; i < n; i += 1) {
      const quote = quotes[i];
      const t = charSpan > 0 ? (quote.char_count - charMin) / charSpan : 0.5;
      const baseRadius = radiusMin + t * (radiusMax - radiusMin);
      const geometry = new THREE.SphereGeometry(baseRadius, 28, 28);
      const hue = this.stringToHue(quote.id);
      const color = new THREE.Color().setHSL(hue, 0.62, 0.58);
      const material = new THREE.MeshStandardMaterial({
        color,
        emissive: color.clone().multiplyScalar(0.35),
        emissiveIntensity: 0.45,
        metalness: 0.22,
        roughness: 0.48,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(orbitRadius, 0, 0);
      mesh.userData['quoteId'] = quote.id;
      mesh.userData['slug'] = quote.slug;
      mesh.userData['quote'] = quote.quote;
      mesh.userData['author'] = quote.author;

      const pivot = new THREE.Object3D();
      pivot.rotation.y = (i / n) * Math.PI * 2;
      pivot.rotation.x = Math.sin((i / n) * Math.PI * 2) * 0.22;
      pivot.add(mesh);

      this.disposables.push(geometry, material);
      group.add(pivot);
      this.quoteOrbitPivots.push(pivot);
    }
  }

  private stringToHue(input: string): number {
    let hash = 0;
    for (let i = 0; i < input.length; i += 1) {
      hash = (hash * 31 + input.charCodeAt(i)) | 0;
    }
    return (Math.abs(hash) % 360) / 360;
  }
}
