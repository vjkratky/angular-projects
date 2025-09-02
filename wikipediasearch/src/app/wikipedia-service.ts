import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SearchResult } from '../search-result';

interface WikipediaResponse {
  query: {
    search: SearchResult[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(searchTerm: string) {
    return this.http
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: searchTerm,
          origin: '*',
        },
      })
      .pipe(map((value) => value.query?.search));
  }
}
