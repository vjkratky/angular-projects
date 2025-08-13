import { Component, signal } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private textToType: string;
  typedText: string;
  private duration: number;
  private start: number;

  constructor() {
    this.textToType = faker.lorem.sentence(5);
    this.typedText = '';
    this.duration = 0;
    this.start = 0;
  }

  onTyping(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (this.start == 0) {
      this.start = Date.now();
    }

    this.typedText = input.value;
    if (this.typedText == this.textToType) {
      this.duration = Date.now() - this.start;
    }
  }

  getTextToType(): string {
    return this.textToType;
  }

  compareInput(letter: string, typedLetter: string): string {
    if (!typedLetter) {
      return 'pending';
    }

    return typedLetter === letter ? 'correct' : 'incorrect';
  }

  typingDuration(): number {
    return Math.floor(this.duration / 1000);
  }
}
