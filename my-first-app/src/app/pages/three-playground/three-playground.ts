import { AfterViewInit, Component, ElementRef, inject, NgZone, OnDestroy, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { KeyboardSceneNavigator } from '../../three/controls/keyboard-scene-navigator';
import { createStarscape } from '../../three/scene/starscape-builder';
import type { ThreeDisposable } from '../../three/three-disposable';
import { QuoteDataService } from '../../services/quote-data.service';
import { QuoteConstellationBuilder } from './quote-constellation-builder';
import { QuoteHoverController } from './quote-hover-controller';

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

  private readonly ngZone = inject(NgZone);
  private readonly quoteDataService = inject(QuoteDataService);

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private controls?: OrbitControls;
  private starMaterial?: THREE.PointsMaterial;
  private quoteGroup?: THREE.Group;
  private quoteOrbitPivots: THREE.Object3D[] = [];
  private readonly disposables: ThreeDisposable[] = [];
  private readonly keyboardNav = new KeyboardSceneNavigator();
  private quoteHover?: QuoteHoverController;
  private constellationBuilder?: QuoteConstellationBuilder;
  private readonly clock = new THREE.Clock();
  private frameId?: number;
  private resizeObserver?: ResizeObserver;

  ngAfterViewInit(): void {
    const host = this.canvasContainer.nativeElement;
    const width = host.clientWidth || 900;
    const height = host.clientHeight || 540;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#0b1020');

    this.camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 2000);
    this.camera.position.set(0, 1.2, 14);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    host.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.enableRotate = false;
    this.controls.enablePan = true;
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      MIDDLE: THREE.MOUSE.DOLLY,
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

    this.constellationBuilder = new QuoteConstellationBuilder(this.disposables);
    this.quoteHover = new QuoteHoverController({
      tooltip: this.quoteTooltipRef.nativeElement,
      quoteText: this.tooltipQuoteRef.nativeElement,
      authorText: this.tooltipAuthorRef.nativeElement,
    });

    this.loadQuotesAndCreateSpheres();

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

  private createDirectionalLight(): THREE.DirectionalLight {
    const directionalLight = new THREE.DirectionalLight(0x9ec8ff, 1.3);
    directionalLight.position.set(2, 3, 4);
    return directionalLight;
  }

  private loadQuotesAndCreateSpheres(): void {
    void this.quoteDataService
      .loadAll()
      .then((quotes) => {
        if (!this.scene || !this.camera || !this.controls || !this.constellationBuilder) {
          return;
        }

        const result = this.constellationBuilder.build(this.scene, quotes);
        if (!result) {
          return;
        }

        this.quoteGroup = result.quoteGroup;
        this.quoteOrbitPivots = result.orbitPivots;
        this.quoteHover?.setQuoteGroup(this.quoteGroup);
        this.constellationBuilder.frameInView(this.quoteGroup, this.camera, this.controls);
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  }

  private readonly onResize = (): void => {
    if (!this.renderer || !this.camera) {
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
  };

  private readonly onPointerMove = (event: PointerEvent): void => {
    if (!this.renderer || !this.camera || !this.quoteHover) {
      return;
    }

    this.quoteHover.handlePointerMove(event, this.renderer.domElement, this.camera);
  };

  private readonly onPointerLeave = (): void => {
    this.quoteHover?.handlePointerLeave();
  };

  private animate(): void {
    if (!this.renderer || !this.scene || !this.camera || !this.controls) {
      return;
    }

    const delta = Math.min(this.clock.getDelta(), 0.05);
    const t = this.clock.getElapsedTime();
    const motionPaused = this.quoteHover?.isHovering ?? false;

    if (!motionPaused) {
      if (this.starMaterial) {
        this.starMaterial.opacity = 0.42 + 0.18 * (0.5 + 0.5 * Math.sin(t * 0.9));
      }

      const orbitSpeed = 0.32;
      for (const pivot of this.quoteOrbitPivots) {
        pivot.rotation.y += orbitSpeed * delta;
      }
    }

    this.keyboardNav.applyMovement(delta, this.camera, this.controls);
    this.quoteHover?.updateTooltipPosition(this.renderer.domElement, this.camera);

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.frameId = requestAnimationFrame(() => this.animate());
  }
}
