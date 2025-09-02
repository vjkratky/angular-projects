import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: 1,
          overflow: 'hidden',
        })
      ),
      transition('collapsed <=> expanded', [animate('400ms ease-in-out')]),
    ]),

    trigger('fadeInText', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms 100ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('200ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class Accordion {
  @Input() items: Record<string, any>[] = [];
  openedItemIndex: number | null = null;
  isExpanded = false;

  changeOpenedIndex(index: number) {
    this.openedItemIndex = this.openedItemIndex === index ? -1 : index;
  }
}
