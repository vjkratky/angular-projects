import { Component, Input } from '@angular/core';
import { SearchResult } from '../../search-result';

@Component({
  selector: 'app-page-list',
  imports: [],
  templateUrl: './page-list.html',
  styleUrl: './page-list.css',
})
export class PageList {
  @Input() searchedResults: SearchResult[] = [];
}
