import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-quotes',
  imports: [MatCardModule, MatListModule, MatDividerModule],
  templateUrl: './quotes.html',
  styleUrl: './quotes.scss',
})
export class Quotes {}
