declare var Parallax: any;
import { afterEveryRender, afterNextRender, Component, ElementRef, OnDestroy, signal, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AboutItem } from '../../models/about-item';

@Component({
  selector: 'app-about-me',
  imports: [MatCardModule, MatListModule],
  standalone: true,
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe implements OnDestroy {
  @ViewChild('scene') sceneElement!: ElementRef;
  @ViewChild('image') imageElement!: ElementRef;
  // @ViewChild('aboutMe') aboutMeElement!: ElementRef;
  @ViewChild('aboutMeCard', { read: ElementRef }) aboutMeCard!: ElementRef;


  private parallaxInstance?: any;
  private isParallaxInitialized = false;

  technologies = signal<AboutItem[]>([
    { name: 'Git', url: 'https://git-scm.com/', color: '#f05032', image: 'library-icons/git.svg', coordinates: { top: 0, left: 0 }, depth: '0' },
    { name: 'Angular', url: 'https://angular.io/', color: '#dd0031', image: 'library-icons/angular.svg', coordinates: { top: 0, left: 0 }, depth: '0' },
    { name: 'React', url: 'https://react.dev/', color: '#00d8ff', image: 'library-icons/react.svg', coordinates: { top: 0, left: 0 }, depth: '0' },
    { name: 'GraphQL', url: 'https://graphql.org/', color: '#e10098', image: 'library-icons/graphql.svg', coordinates: { top: 0, left: 0 }, depth: '0' },
    { name: 'Android', url: 'https://developer.android.com/', color: '#3ddc84', image: 'library-icons/android.svg', coordinates: { top: 0, left: 0 }, depth: '0' },
  ]);

  constructor() {

    afterNextRender(() => {
      this.randomizePositions();
    });

    afterEveryRender(() => {
      if (!this.sceneElement) {
        return;
      }


      if (!this.isParallaxInitialized) {
        const scene = this.sceneElement.nativeElement;
        this.parallaxInstance = new Parallax(scene, {
          relativeInput: true,
          hoverOnly: true
        });
        this.isParallaxInitialized = true;
      } else {
        this.parallaxInstance?.updateLayers?.();
      }
    });
  }

  randomizePositions() {
    const rect = this.imageElement.nativeElement.getBoundingClientRect();
    const excludedRect = this.aboutMeCard.nativeElement.getBoundingClientRect();

    const containerWidth = rect.width - (0.1 * rect.width); // Define your container width
    const containerHeight = rect.height; // Define your container height
    const itemSize = 30; // Estimated size of your item

    this.technologies.update(items => items.map(item => ({
      ...item,
      coordinates: this.generateSafeCoordinates(containerWidth, containerHeight, itemSize, itemSize, { x: 0, y: 0, width: excludedRect.width, height: excludedRect.height }),
      depth: "0." + (Math.floor(Math.random() * 10) + 1
      ).toString()
    })));

    console.log('rect', rect);
    for (const item of this.technologies()) {
      console.log(item.name, item.coordinates, item.depth);
    }

  }

  getVisibleRectHeight(nativeElement: any): number {
    const rect = nativeElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calculate visible top and bottom relative to viewport
    const visibleTop = Math.max(0, rect.top);
    const visibleBottom = Math.min(viewportHeight, rect.bottom);

    // Visible height is the difference (clamped to 0 if not on screen)
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

    return visibleHeight;
  }

  generateSafeCoordinates(
    containerWidth: number,
    containerHeight: number,
    elementWidth: number,
    elementHeight: number,
    excludedRect: { x: number, y: number, width: number, height: number }
  ) {
    let x = 0;
    let y = 0;
    let hasOverlap = true;

    // Rejection Sampling: Keep trying until a valid spot is found
    while (hasOverlap) {
      x = Math.random() * (containerWidth - elementWidth);
      y = Math.random() * (containerHeight - elementHeight);

      // Check if the new rect overlaps with the excluded corner rect
      hasOverlap = !(
        x + elementWidth < excludedRect.x ||
        x > excludedRect.x + excludedRect.width ||
        y + elementHeight < excludedRect.y ||
        y > excludedRect.y + excludedRect.height
      );
    }

    return { top: y, left: x };
  }

  ngOnDestroy(): void {
    this.parallaxInstance?.destroy();
  }

}
