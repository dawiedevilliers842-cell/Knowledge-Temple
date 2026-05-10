declare var Parallax: any;
import { Component, ElementRef, ViewChild, afterEveryRender } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { Mandala } from '../../components/mandala/mandala';



@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatDividerModule, MatChipsModule, Mandala],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChild('scene') sceneElement!: ElementRef;

  constructor() {

    afterEveryRender(() => {
      const scene = this.sceneElement.nativeElement;
      // Initialize Parallax.js
      const parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true
      });
    });
  }

}



