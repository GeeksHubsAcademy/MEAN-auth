import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {

  constructor() { }

  sum(a: number, b: number): number {
    const result: number = a + b;
    return result;
  }
  divide(a: number, b: number): number {
    const result = a / b;
    return result;
  }
}
