import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { EmploymentHistory } from '../../models/employment-history';

@Component({
  selector: 'app-employment-container',
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,],
  templateUrl: './employment-container.html',
  styleUrl: './employment-container.scss',
})
export class EmploymentContainer {
  @Input() employmentHistory: EmploymentHistory = {} as EmploymentHistory; // Required  
}
