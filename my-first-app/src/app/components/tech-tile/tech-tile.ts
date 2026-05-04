import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TechnologyItem } from '../../models/technology-item';

@Component({
  selector: 'app-tech-tile',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './tech-tile.html',
  styleUrl: './tech-tile.scss',
})
export class TechTile {
  @Input() technologyItem: TechnologyItem = {} as TechnologyItem;
}
