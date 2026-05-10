import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TechTile } from '../../components/tech-tile/tech-tile';
import { TechnologyItem } from '../../models/technology-item';

@Component({
  selector: 'app-technology-stack',
  imports: [MatCardModule, MatChipsModule, TechTile],
  templateUrl: './technology-stack.html',
  styleUrl: './technology-stack.scss',
})
export class TechnologyStack {


  technologyItems = signal<TechnologyItem[]>([]);

  ngAfterViewInit(): void {
    this.loadTechnologyItems();
  }

  private loadTechnologyItems(): void {
    void fetch('./technologies-used/technologies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load technology history (${response.status})`);
        }
        return response.json() as Promise<TechnologyItem[]>;
      })
      .then((employmentHistory) => {
        this.technologyItems.set(employmentHistory);
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  }


}
