import { AfterViewInit, Component, ElementRef, inject, NgZone, OnDestroy, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { KeyboardSceneNavigator } from '../../three/controls/keyboard-scene-navigator';
import { createStarscape } from '../../three/scene/starscape-builder';
import type { ThreeDisposable } from '../../three/three-disposable';

@Component({
  selector: 'app-three-playground',
  imports: [],
  templateUrl: './three-playground.html',
  styleUrl: './three-playground.scss',
})
export class ThreePlayground implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) private canvasContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('cameraLog', { static: true }) private cameraLogRef!: ElementRef<HTMLDivElement>;

  private readonly ngZone = inject(NgZone);

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private controls?: OrbitControls;
  private starMaterial?: THREE.PointsMaterial;
  private quoteGroup?: THREE.Group;
  private quoteOrbitPivots: THREE.Object3D[] = [];
  private readonly disposables: ThreeDisposable[] = [];
  private readonly keyboardNav = new KeyboardSceneNavigator();
  private readonly clock = new THREE.Clock();
  private frameId?: number;
  private resizeObserver?: ResizeObserver;
  private cube: THREE.Mesh = new THREE.Mesh();
  private labelRenderer!: CSS2DRenderer;

  ngAfterViewInit(): void {
    this.setup3Js();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    this.keyboardNav.detach();
    this.resizeObserver?.disconnect();
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

  private setup3jsScene(host: HTMLDivElement): void {

    const width = host.clientWidth || 900;
    const height = host.clientHeight || 540;

    // You only need a camera a scene and a renderer.

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#0b1020');
    this.scene.background = null;

    this.camera = new THREE.PerspectiveCamera(120, width / height, 0.1, 2000);
    this.camera.position.set(0, 1.2, 14);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000, 0);
    host.appendChild(this.renderer.domElement);

    // 2. CSS2D Renderer Setup
    this.labelRenderer = new CSS2DRenderer();
    this.labelRenderer.setSize(host.clientWidth || 900, host.clientHeight || 540);
    this.labelRenderer.domElement.style.position = 'absolute';
    this.labelRenderer.domElement.style.top = '0px';
    this.labelRenderer.domElement.style.pointerEvents = 'none'; // Allows clicks to pass through
    host.appendChild(this.labelRenderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.enableRotate = true;
    this.controls.enablePan = true;
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      MIDDLE: THREE.MOUSE.ROTATE,
      RIGHT: THREE.MOUSE.PAN,
    };
    this.controls.minDistance = 1.25;
    this.controls.maxDistance = 120;
    this.controls.update();

    this.scene.add(
      new THREE.AmbientLight(0xffffff, 0.8),
      this.createDirectionalLight(),
    );

    const starscape = createStarscape(this.scene, this.disposables);
    this.starMaterial = starscape.material;

    window.addEventListener('resize', this.onResize);
    this.keyboardNav.attach();
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(host);

    const canvas = this.renderer.domElement;
    this.ngZone.runOutsideAngular(() => {
      canvas.addEventListener('pointermove', this.onPointerMove);
      canvas.addEventListener('pointerleave', this.onPointerLeave);
      this.animate();
    });

  }

  private setup3Js(): void {
    const host = this.canvasContainer.nativeElement;
    this.setup3jsScene(host);
    this.createCube();
    this.create2DRenderer(host);
  }

  private createCube(): void {
    if (!this.scene || !this.camera) {
      return;
    }

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene?.add(this.cube);
    this.camera.position.z = 5;
  }

  private createDirectionalLight(): THREE.DirectionalLight {
    const directionalLight = new THREE.DirectionalLight(0x9ec8ff, 1.3);
    directionalLight.position.set(2, 3, 4);
    return directionalLight;
  }

  private create2DRenderer(host: HTMLDivElement) {


    // 4. Create HTML Label Element & CSS2DObject
    const p = document.createElement('div');
    p.className = 'label';
    p.textContent = 'Hello Cube!';

    const c2d = new CSS2DObject(p);
    c2d.position.set(0, 1.2, 0); // Position slightly above the cube
    this.cube.add(c2d);

  }

  private readonly onResize = (): void => {
    if (!this.renderer || !this.camera || !this.labelRenderer) {
      return;
    }

    const host = this.canvasContainer.nativeElement;
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (width < 1 || height < 1) {
      return;
    }

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.labelRenderer.setSize(width, height);
  };

  private readonly onPointerMove = (event: PointerEvent): void => {
    if (!this.renderer || !this.camera) {
      return;
    }

  };

  private readonly onPointerLeave = (): void => {

  };

  private animate(): void {
    if (!this.renderer || !this.scene || !this.camera || !this.controls || !this.create2DRenderer) {
      return;
    }

    const delta = Math.min(this.clock.getDelta(), 0.05);
    const t = this.clock.getElapsedTime();

    if (this.starMaterial) {
      this.starMaterial.opacity = 0.42 + 0.18 * (0.5 + 0.5 * Math.sin(t * 0.9));
    }

    const orbitSpeed = 0.32;

    for (const pivot of this.quoteOrbitPivots) {
      // const orbitSpeed = this.camera.position.distanceTo(pivot.position) / 100;
      if (this.renderer.info.render.frame % 60 === 0) {
        console.log(orbitSpeed);
      }

      pivot.rotation.y += orbitSpeed * delta;
    }

    this.keyboardNav.applyMovement(delta, this.camera, this.controls);

    this.controls.update();
    if (this.cube) {

    }
    // this.cube.rotation.x += orbitSpeed * delta;
    // this.cube.rotation.y += orbitSpeed * delta;

    this.renderer.render(this.scene, this.camera);
    this.labelRenderer.render(this.scene, this.camera);

    // request the next frame and pauses when the user is not interacting with the page
    this.frameId = requestAnimationFrame(() => this.animate());
  }


}
