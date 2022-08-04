import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../calculator.service';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.scss'],
})
export class CalculatorDisplayComponent implements OnInit {
  public displayValue$ = this.calculatorService.getDisplayValue;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {}
}
