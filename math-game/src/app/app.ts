import { Component } from '@angular/core';
import { Equation } from './equation/equation';

@Component({
  selector: 'app-root',
  imports: [Equation],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
