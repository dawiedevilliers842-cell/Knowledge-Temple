import { Component } from '@angular/core';
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
export class Home { }
