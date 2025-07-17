import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  length: number = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  private password = '';

  constructor() {
    this.password = '';
  }

  onChangeLength(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.length = isNaN(input.valueAsNumber) ? 0 : input.valueAsNumber;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    /*
    console.log(`
      About to generate a password with the following:
      Include letters: ${this.includeLetters}
      Include numbers: ${this.includeNumbers}
      Include symbols: ${this.includeSymbols}
      `);
    */
    const letters = 'abcdefghijklmopqrtuvxwyz';
    const numbers = '1234567890';
    const symbols = '!@#$%¨&*()_+';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  getPassword(): string {
    return this.password;
  }
}
