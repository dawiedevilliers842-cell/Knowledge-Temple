import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-icon-widget',
  imports: [],
  templateUrl: './icon-widget.html',
  styleUrl: './icon-widget.scss',
})
export class IconWidget {
  @Input() technologies: string[] = [] // Required  
}
