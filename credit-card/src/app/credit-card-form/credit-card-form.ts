import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardDisplay } from '../card-display/card-display';
import { Inputs } from '../ui/inputs/inputs';
import { DateFormControl } from '../ui/inputs/type/date-form-control';
import { SecurityCodeControl } from '../ui/inputs/type/security-code-control';

@Component({
  selector: 'app-credit-card-form',
  imports: [ReactiveFormsModule, Inputs, CardDisplay],
  templateUrl: './credit-card-form.html',
  styleUrl: './credit-card-form.css',
})
export class CreditCardForm {
  creditCardForm = new FormGroup({
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new SecurityCodeControl('', [
      Validators.required,
      Validators.min(100),
      Validators.max(999),
    ]),
  });

  onSubmit() {
    console.log('Form');
  }

  onResetClick() {
    this.creditCardForm.reset();
  }

  get cardNumber(): FormControl {
    return this.creditCardForm.get('cardNumber') as FormControl;
  }

  get name(): FormControl {
    return this.creditCardForm.get('name') as FormControl;
  }

  get expiration(): DateFormControl {
    return this.creditCardForm.get('expiration') as unknown as DateFormControl;
  }

  get securityCode(): SecurityCodeControl {
    return this.creditCardForm.get(
      'securityCode'
    ) as unknown as SecurityCodeControl;
  }
}
