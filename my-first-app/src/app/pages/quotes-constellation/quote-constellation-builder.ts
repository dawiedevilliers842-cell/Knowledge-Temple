import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createHubProceduralTexture } from '../../three/textures/hub-procedural-textures';
import { trackDisposable, type ThreeDisposable } from '../../three/three-disposable';
import {
  CLUSTER_CORNER,
  CLUSTER_HUB_COLOR,
  CLUSTER_HUB_TEXTURE,
  QUOTE_CLUSTER_ORDER,
  quoteClusterId,
  stringToHue,
  type QuoteClusterId,
  type QuoteRecord,
} from './models/quote.types';

export interface QuoteConstellationResult {
  quoteGroup: THREE.Group;
  orbitPivots: THREE.Object3D[];
}

export class QuoteConstellationBuilder {
  constructor(private readonly disposables: ThreeDisposable[]) { }

  build(scene: THREE.Scene, quotes: QuoteRecord[]): QuoteConstellationResult | null {
    if (quotes.length === 0) {
      return null;
    }

    const orbitPivots: THREE.Object3D[] = [];
    // create the root of the cluster groups
    const root = new THREE.Group();
    scene.add(root);

    // create map of quote categories
    const byCat = new Map<QuoteClusterId, QuoteRecord[]>();
    for (const id of QUOTE_CLUSTER_ORDER) {
      byCat.set(id, []);
    }
    for (const quote of quotes) {
      byCat.get(quoteClusterId(quote))!.push(quote);
    }

    const cornerRadius = 8.85;

    for (const catId of QUOTE_CLUSTER_ORDER) {

      // if list is empty continue with the loop
      const list = byCat.get(catId)!;
      if (list.length === 0) {
        continue;
      }

      // create a group for every category
      const cluster = new THREE.Group();
      cluster.name = `quotes-${catId}`;

      // centre the general category, place the other categories in the corners
      if (catId === 'general') {
        cluster.position.set(0, 0, 0);
      } else {
        const [kx, ky, kz] = CLUSTER_CORNER[catId];
        cluster.position.set(kx * cornerRadius, ky * cornerRadius * 0.33, kz * cornerRadius);

      }
      root.add(cluster);

      const n = list.length;
      const hubRadius = this.clusterHubRadius(catId, n);
      const hubSeg = THREE.MathUtils.clamp(Math.floor(26 + Math.sqrt(n) * 1.35), 24, 48);
      const hubGeom = new THREE.SphereGeometry(hubRadius, hubSeg, hubSeg);
      const hubTexture = createHubProceduralTexture(CLUSTER_HUB_TEXTURE[catId]);
      const hubTint = new THREE.Color(CLUSTER_HUB_COLOR[catId]);
      const hubMat = new THREE.MeshStandardMaterial({
        map: hubTexture,
        color: '#ffffff',
        emissive: hubTint,
        emissiveIntensity: 0.1 + 0.04 * Math.min(1, n / 180),
        metalness: 0.42,
        roughness: 0.34,
      });
      trackDisposable(this.disposables, hubGeom, hubMat, hubTexture);

      const hub = new THREE.Mesh(hubGeom, hubMat);
      hub.userData['clusterId'] = catId;
      hub.userData['hub'] = 'hub';
      cluster.add(hub);

      const charMin = Math.min(...list.map((q) => q.char_count));
      const charMax = Math.max(...list.map((q) => q.char_count));
      const charSpan = Math.max(1, charMax - charMin);

      const shellCeil =
        catId === 'general' ? 13 : 9;
      // 13;
      // 9;
      const perShell =
        catId === 'general' ? 22 + 48 / Math.max(hubRadius, 0.4) : 16 + 30 / Math.max(hubRadius, 0.3);
      // 22 + 48 / Math.max(hubRadius, 0.4);
      // 16 + 30 / Math.max(hubRadius, 0.4);

      const shellCount = THREE.MathUtils.clamp(Math.ceil(n / perShell), 1, shellCeil);
      const innerGap =
        hubRadius * 0.55 + 0.44 + Math.sqrt(Math.max(n, 1)) * (catId === 'general' ? 0.032 : 0.026);
      const shellStep = THREE.MathUtils.clamp(
        (catId === 'general' ? 0.19 : 0.15) + hubRadius * 0.07
        + (n > 80 ? 0.04 : 0),
        0.13,
        0.44,
      );
      const shellRadii: number[] = [];
      for (let s = 0; s < shellCount; s += 1) {
        shellRadii.push(innerGap + s * shellStep);
      }

      const crowd = THREE.MathUtils.clamp(n / (catId === 'general' ? 240 : 85), 0, 1);
      // const crowd = THREE.MathUtils.clamp(n / (240), 0, 1);

      const radiusMin = 0.03 - crowd * 0.006;
      const radiusMax = 0.105 - crowd * 0.028;
      const golden = Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < n; i += 1) {
        const quote = list[i];
        const tChar = charSpan > 0 ? (quote.char_count - charMin) / charSpan : 0.5;
        const microR = radiusMin + tChar * (radiusMax - radiusMin);

        const geometry = new THREE.SphereGeometry(microR, 20, 20);
        const hue = stringToHue(quote.id);
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

        // mesh.position.set(3, 0, 0);
        mesh.position.set(orbitR, 0, 0);

        mesh.userData['quoteId'] = quote.id;
        mesh.userData['slug'] = quote.slug;
        mesh.userData['quote'] = quote.quote;
        mesh.userData['author'] = quote.author;
        mesh.userData['clusterId'] = catId;

        const pivot = new THREE.Object3D();
        const yTurn = golden * i + shellIndex * 0.85;
        console.log("Y turn");
        console.log(yTurn);

        // const yTurn = golden * 0.85;

        pivot.rotation.y = yTurn;
        pivot.rotation.x = Math.sin(yTurn * 0.68) * (catId === 'general' ? 0.36 : 0.26);
        pivot.add(mesh);

        trackDisposable(this.disposables, geometry, material);
        cluster.add(pivot);
        orbitPivots.push(pivot);
      }
    }

    return { quoteGroup: root, orbitPivots };
  }

  // Changes the camera position to include the entire quote scene
  frameInView(
    quoteGroup: THREE.Group,
    camera: THREE.PerspectiveCamera,
    controls: OrbitControls,
  ): void {
    if (quoteGroup.children.length === 0) {
      return;
    }

    quoteGroup.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(quoteGroup);
    const size = box.getSize(new THREE.Vector3());
    if (!Number.isFinite(size.x) || size.x < 1e-6) {
      return;
    }

    // how big is the quote group?
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const center = sphere.center;
    const radius = Math.max(sphere.radius, 0.6);

    // vertical FOV 
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const distV = radius / Math.tan(vFov / 2);
    // horizontal FOV
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
    const distH = radius / Math.tan(hFov / 2);
    // determine which is bigger the V or H distance
    let distance = Math.max(distV, distH) * 1.16;

    distance = THREE.MathUtils.clamp(distance, 6, 95);

    // Place the camera 
    const dir = new THREE.Vector3(0.22, 0.16, 1).normalize();
    camera.position.copy(center.clone().add(dir.multiplyScalar(distance)));

    camera.near = Math.max(0.06, distance * 0.0015);
    camera.far = Math.max(distance * 40, 800);
    camera.updateProjectionMatrix();

    controls.target.copy(center);
    controls.maxDistance = Math.max(96, distance * 2.4);
    controls.update();
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
      const blend = 0.5 * (Math.sqrt(count / 88) * 0.38) + 0.5 * (Math.log1p(count) * 0.095);
      // const blend = 0.5;
      return THREE.MathUtils.clamp(base + blend, base, cap);
    }
    const ref = 34;
    const base = 0.2;
    const cap = 0.95;
    const grow = (Math.sqrt(count) / Math.sqrt(ref)) * 0.4;
    return THREE.MathUtils.clamp(base + grow, base, cap);
  }
}
