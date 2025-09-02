import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Output() submitted = new EventEmitter<string>();
  searchTerm = '';

  onInput(value: string) {
    this.searchTerm = value;
  }

  onFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.submitted.emit(this.searchTerm);
  }
}
