import { AfterViewInit, Component, ElementRef, inject, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { QuoteDataService } from '../../services/quote-data.service';
import { KeyboardSceneNavigator } from '../../three/controls/keyboard-scene-navigator';
import { createStarscape } from '../../three/scene/starscape-builder';
import type { ThreeDisposable } from '../../three/three-disposable';
import { QuoteConstellationBuilder } from './quote-constellation-builder';
import { QuoteHoverController } from './quote-hover-controller';

@Component({
  selector: 'app-quotes-constellation',
  imports: [],
  templateUrl: './quotes-constellation.html',
  styleUrl: './quotes-constellation.scss',
})
export class QuotesConstellation implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) private canvasContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('cameraLog', { static: true }) private cameraLogRef!: ElementRef<HTMLDivElement>;
  @ViewChild('quoteTooltip', { static: true }) private quoteTooltipRef!: ElementRef<HTMLDivElement>;
  @ViewChild('tooltipQuote', { static: true }) private tooltipQuoteRef!: ElementRef<HTMLParagraphElement>;
  @ViewChild('tooltipAuthor', { static: true }) private tooltipAuthorRef!: ElementRef<HTMLParagraphElement>;
  @ViewChild('categoryName', { static: true }) private categoryNameRef!: ElementRef<HTMLParagraphElement>;

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

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#0b1020');

    this.camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 2000);
    this.camera.position.set(0, 1.2, 14);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
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
    this.controls.enableDamping = true;
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

    this.constellationBuilder = new QuoteConstellationBuilder(this.disposables);
    this.quoteHover = new QuoteHoverController({
      tooltip: this.quoteTooltipRef.nativeElement,
      quoteText: this.tooltipQuoteRef.nativeElement,
      authorText: this.tooltipAuthorRef.nativeElement,
    });

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

  private startSlowZoom(): void {
    if (this.camera && this.controls) {
      // GSAP animation to smoothly move camera closer on the Z-axis
      this.controls.enabled = false;
      gsap.to(this.camera.position, {
        z: 20,               // Target Z position (closer to the object)
        duration: 3,        // Time in seconds to complete the zoom
        ease: 'power2.out',
        onComplete: () => {
          if (this.controls) {
            this.controls.enabled = true;
          }
        }

      });
    }

  }

  private setup3Js(): void {
    const host = this.canvasContainer.nativeElement;
    this.setup3jsScene(host);
    this.loadQuotesAndCreateSpheres();
    this.startSlowZoom();
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
        // const orbitSpeed = this.camera.position.distanceTo(pivot.position) / 100;
        if (this.renderer.info.render.frame % 60 === 0) {
          console.log(orbitSpeed);
        }

        pivot.rotation.y += orbitSpeed * delta;
      }
    }

    //render labels
    if (this.quoteGroup) {

      const generalDistance = this.camera.position.distanceTo(this.quoteGroup.children[0].children[0].position);

      if (generalDistance < 15) {
        this.quoteGroup.children.forEach(element => {
          element.children[0].children[0].visible = false;
        });
      } else {
        this.quoteGroup.children.forEach(element => {
          element.children[0].children[0].visible = true;
        });
      }
    }

    this.keyboardNav.applyMovement(delta, this.camera, this.controls);
    this.quoteHover?.updateTooltipPosition(this.renderer.domElement, this.camera);

    this.controls.update();
    this.updateCameraLog();
    this.renderer.render(this.scene, this.camera);
    this.labelRenderer.render(this.scene, this.camera);
    this.frameId = requestAnimationFrame(() => this.animate());
  }

  private updateCameraLog(): void {
    if (!this.cameraLogRef.nativeElement || !this.camera || !this.renderer) {
      return;
    }

    const pos = this.camera.position;
    const rot = this.camera.rotation;

    const logText = `
    <b>Position:</b><br>
    X: ${pos.x.toFixed(2)}<br>
    Y: ${pos.y.toFixed(2)}<br>
    Z: ${pos.z.toFixed(2)}<br>
    <b>Rotation (Rad):</b><br>
    X: ${rot.x.toFixed(2)}<br>
    Y: ${rot.y.toFixed(2)}<br>
    Z: ${rot.z.toFixed(2)}<br>
    <b>Distance to:</b><br>
    General: ${pos.x.toFixed(2)}<br>
  `;

    this.cameraLogRef.nativeElement.innerHTML = logText;

    if (this.renderer.info.render.frame % 60 === 0) {
      // console.log(`Pos: X:${pos.x.toFixed(1)} Y:${pos.y.toFixed(1)} Z:${pos.z.toFixed(1)}`);
    }
  }
}
