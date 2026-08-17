import * as THREE from 'three';
import { trackDisposable, type ThreeDisposable } from '../three-disposable';

export interface StarscapeResult {
  points: THREE.Points;
  material: THREE.PointsMaterial;
}

export function createStarscape(
  scene: THREE.Scene,
  disposables: ThreeDisposable[],
  starCount = 1300,
): StarscapeResult {
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i += 1) {
    const i3 = i * 3;
    positions[i3] = THREE.MathUtils.randFloatSpread(60);
    positions[i3 + 1] = THREE.MathUtils.randFloatSpread(38);
    positions[i3 + 2] = THREE.MathUtils.randFloatSpread(60);
  }

  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const starMaterial = new THREE.PointsMaterial({
    color: '#d5e8ff',
    size: 0.055,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  });

  const stars = new THREE.Points(starGeometry, starMaterial);
  trackDisposable(disposables, starGeometry, starMaterial);
  scene.add(stars);

  return { points: stars, material: starMaterial };
}
