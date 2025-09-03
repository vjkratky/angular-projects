import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photo-display',
  imports: [],
  templateUrl: './photo-display.html',
  styleUrl: './photo-display.css',
})
export class PhotoDisplay {
  @Output() submitted = new EventEmitter<string>();
  @Input() imageSrc: string = '';

  onClick() {
    this.submitted.emit();
  }
}
