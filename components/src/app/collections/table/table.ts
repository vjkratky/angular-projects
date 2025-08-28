import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [NgClass],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  @Input() classNames = '';

  @Input() data: Array<{ [key: string]: any }> = [];
  @Input() headers: Array<{ key: string; label: string }> = [];
}
