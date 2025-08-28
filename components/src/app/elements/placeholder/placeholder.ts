import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  imports: [],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.scss',
})
export class Placeholder {
  @Input() header = true;
  @Input() lines = 3;

  get linesArray() {
    return Array.from({ length: this.lines });
  }
}
