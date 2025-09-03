import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
// import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-inputs',
  imports: [CommonModule, ReactiveFormsModule],
  // imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './inputs.html',
  styleUrl: './inputs.css',
})
export class Inputs {
  @Input() control!: FormControl;
  @Input() label!: string;

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

  get errors(): ValidationErrors {
    return this.control.errors ?? {};
  }
}
