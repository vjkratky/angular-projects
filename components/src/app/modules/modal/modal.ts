import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}
