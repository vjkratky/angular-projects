import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlight {
  constructor(private el: ElementRef, private controlName: NgControl) {}

  ngOnInit() {
    this.controlName.control?.parent?.valueChanges
      .pipe(
        map(({ a, b, answer }) => {
          return Math.abs((a + b - answer) / (a + b));
        })
      )
      .subscribe((value) => {
        console.log(value);
        if (value < 0.2) {
          console.log('close');
          this.el.nativeElement.classList.add('close');
        } else {
          console.log('not');
          this.el.nativeElement.classList.remove('close');
        }
      });
  }
}
