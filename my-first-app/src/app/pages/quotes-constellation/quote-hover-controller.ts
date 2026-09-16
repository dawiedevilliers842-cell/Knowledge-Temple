import * as THREE from 'three';

export interface QuoteHoverElements {
  tooltip: HTMLElement;
  quoteText: HTMLElement;
  authorText: HTMLElement;
  quoteCategory: HTMLElement;
  categoryText: HTMLElement;
}

/** Raycast hover + DOM tooltip for quote satellite spheres. */
export class QuoteHoverController {
  private quoteGroup: THREE.Group | null = null;
  private hoveredQuoteMesh: THREE.Mesh | null = null;
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointerNdc = new THREE.Vector2(1, 1);
  private readonly worldPosScratch = new THREE.Vector3();

  constructor(private readonly elements: QuoteHoverElements) { }

  setQuoteGroup(group: THREE.Group | null): void {
    this.quoteGroup = group;
    this.clearHover();
  }

  get isHovering(): boolean {
    return this.hoveredQuoteMesh !== null;
  }

  handlePointerMove(
    event: PointerEvent,
    canvas: HTMLCanvasElement,
    camera: THREE.PerspectiveCamera,
  ): void {
    if (!this.quoteGroup) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    this.pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointerNdc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointerNdc, camera);
    const hits = this.raycaster.intersectObjects(this.quoteGroup.children, true);
    const first = hits.find(
      (hit) => hit.object instanceof THREE.Mesh
    )?.object;

    if (first instanceof THREE.Mesh) {
      if (this.hoveredQuoteMesh !== first) {
        this.hoveredQuoteMesh = first;
        if (typeof first.userData['quote'] === 'string') {
          this.elements.quoteText.textContent = first.userData['quote'] as string;
          this.elements.authorText.textContent = first.userData['author'] as string;
          this.elements.tooltip.setAttribute('aria-hidden', 'false');
        } else if (typeof first.userData['clusterId'] === 'string' && first.userData['hub']) {
          this.elements.categoryText.textContent = first.userData['clusterId'] as string;
          this.elements.quoteCategory.setAttribute('aria-hidden', 'false');
        }

      }
      return;
    }

    if (this.hoveredQuoteMesh) {
      this.clearHover();
    }
  }

  handlePointerLeave(): void {
    this.clearHover();
  }

  updateOverlayPosition() {

  }

  updateTooltipPosition(canvas: HTMLCanvasElement, camera: THREE.PerspectiveCamera): void {
    const { tooltip, quoteCategory } = this.elements;
    if (!this.hoveredQuoteMesh) {
      tooltip.classList.remove('is-visible');
      quoteCategory.classList.remove('is-visible');
      return;
    }

    this.hoveredQuoteMesh.getWorldPosition(this.worldPosScratch);
    this.worldPosScratch.project(camera);

    const rect = canvas.getBoundingClientRect();
    const x = rect.left + (this.worldPosScratch.x * 0.5 + 0.5) * rect.width;
    const y = rect.top + (-this.worldPosScratch.y * 0.5 + 0.5) * rect.height;

    if (this.hoveredQuoteMesh.userData['hub']) {
      quoteCategory.style.left = `${x}px`;
      quoteCategory.style.top = `${y}px`;
      quoteCategory.classList.add('is-visible');
    } else {
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
      tooltip.classList.add('is-visible');
    }


  }

  private clearHover(): void {
    this.hoveredQuoteMesh = null;
    this.elements.tooltip.classList.remove('is-visible');
    this.elements.tooltip.setAttribute('aria-hidden', 'true');
    this.elements.quoteCategory.classList.remove('is-visible');
    this.elements.quoteCategory.setAttribute('aria-hidden', 'true');
  }
}
