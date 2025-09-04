import { DecimalPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { delay, filter, scan } from 'rxjs';
import { MathValidators } from './math-validators';

@Component({
  selector: 'app-equation',
  imports: [ReactiveFormsModule, JsonPipe, DecimalPipe],
  templateUrl: './equation.html',
  styleUrl: './equation.css',
})
export class Equation {
  secondsForSolution = 0;
  secondsForSolutionAverage = 0;
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl(''),
    },
    [MathValidators.addition('answer', 'a', 'b')]
  );

  ngOnInit() {
    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(100),
        scan(
          (acc) => {
            return {
              equationsSolved: acc.equationsSolved + 1,
              startTime: acc.startTime,
            };
          },
          { equationsSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ equationsSolved, startTime }) => {
        this.secondsForSolutionAverage =
          (new Date().getTime() - startTime.getTime()) / equationsSolved / 1000;

        if (equationsSolved < 10) {
          this.mathForm.setValue({
            a: this.randomNumber(),
            b: this.randomNumber(),
            answer: '',
          });
        } else {
          this.secondsForSolution =
            this.secondsForSolutionAverage * equationsSolved;
        }
      });
  }

  private randomNumber(): number {
    return Math.floor(Math.random() * 1000);
  }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  get answer() {
    return this.mathForm.value.answer;
  }
}
