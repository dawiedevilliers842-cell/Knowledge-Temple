import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-technology-stack',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './technology-stack.html',
  styleUrl: './technology-stack.scss',
})
export class TechnologyStack {}
