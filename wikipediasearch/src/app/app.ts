import { Component } from '@angular/core';
import { SearchResult } from '../search-result';
import { PageList } from './page-list/page-list';
import { SearchBar } from './search-bar/search-bar';
import { WikipediaService } from './wikipedia-service';

@Component({
  selector: 'app-root',
  imports: [SearchBar, PageList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  searchedResults: SearchResult[] = [];
  constructor(private wikipedia: WikipediaService) {}

  onSearchTerm(searchTerm: string) {
    this.wikipedia.search(searchTerm).subscribe((response) => {
      this.searchedResults = response;
    });
  }
}
