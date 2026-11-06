import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export type SceneMoveDirection = 'forward' | 'back' | 'left' | 'right';

/** WASD / arrow-key panning on the XZ plane for orbit-controlled scenes. */
export class KeyboardSceneNavigator {
  private readonly keysPressed = new Set<SceneMoveDirection>();
  private readonly moveScratch = {
    forward: new THREE.Vector3(),
    right: new THREE.Vector3(),
    delta: new THREE.Vector3(),
  };

  attach(): void {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  }

  detach(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    this.keysPressed.clear();
  }

  applyMovement(
    delta: number,
    camera: THREE.PerspectiveCamera,
    controls: OrbitControls,
    moveSpeed = 3.2,
  ): void {
    if (this.keysPressed.size === 0) {
      return;
    }

    const { forward, right, delta: moveDelta } = this.moveScratch;

    forward.subVectors(controls.target, camera.position);
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
    camera.position.add(moveDelta);
    controls.target.add(moveDelta);
  }

  private readonly onKeyDown = (event: KeyboardEvent): void => {
    const direction = this.directionForCode(event.code);
    if (!direction) {
      return;
    }

    this.keysPressed.add(direction);
    event.preventDefault();
  };

  private readonly onKeyUp = (event: KeyboardEvent): void => {
    const direction = this.directionForCode(event.code);
    if (!direction) {
      return;
    }

    this.keysPressed.delete(direction);
  };

  private directionForCode(code: string): SceneMoveDirection | null {
    switch (code) {
      case 'KeyW':
      case 'ArrowUp':
        return 'forward';
      case 'KeyS':
      case 'ArrowDown':
        return 'back';
      case 'KeyA':
      case 'ArrowLeft':
        return 'left';
      case 'KeyD':
      case 'ArrowRight':
        return 'right';
      default:
        return null;
    }
  }
}
