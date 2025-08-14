import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ConvertPipe } from './convert-pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, ConvertPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name: string = '';
  date: string = '';
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  amount = new FormControl<string | null>(null, [
    Validators.required,
    Validators.min(0.0),
  ]);

  onNameChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.date = input.value;
  }

  onAmountChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.amount.setValue(input.value);
  }

  validateNumber(event: KeyboardEvent) {
    const allowedKeys = [
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
    ];
    const char = event.key;

    // Allow control keys like Backspace, arrows, etc.
    if (allowedKeys.includes(char)) {
      return;
    }

    // Allow digits and one decimal point
    const isDigit = /\d/.test(char);
    const isDecimal = char === '.';

    // Prevent multiple decimals
    if (isDecimal && (event.target as HTMLInputElement).value.includes('.')) {
      event.preventDefault();
    } else if (!isDigit && !isDecimal) {
      event.preventDefault();
    }
  }

  onHeightChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.height = parseFloat(input.value);
  }

  onMilesChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.miles = parseFloat(input.value);
  }
}
