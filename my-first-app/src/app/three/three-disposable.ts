import * as THREE from 'three';

export type ThreeDisposable = THREE.BufferGeometry | THREE.Material | THREE.Texture;

export function trackDisposable(
  disposables: ThreeDisposable[],
  ...items: ThreeDisposable[]
): void {
  disposables.push(...items);
}
