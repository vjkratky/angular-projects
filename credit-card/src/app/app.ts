import { Component, signal } from '@angular/core';
import { CreditCardForm } from './credit-card-form/credit-card-form';

@Component({
  selector: 'app-root',
  imports: [CreditCardForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('credit-card');
}
