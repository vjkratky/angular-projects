import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-list',
  imports: [],
  templateUrl: './items-list.html',
  styleUrl: './items-list.scss',
})
export class ItemsList {
  @Input() items: Record<string, any>[] = [];
}
