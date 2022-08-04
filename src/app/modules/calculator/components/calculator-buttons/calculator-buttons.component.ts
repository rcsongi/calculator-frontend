import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../calculator.service';
import { CALCULATOR_BUTTONS, OperatorType } from './calculator-buttons.model';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.scss'],
})
export class CalculatorButtonsComponent implements OnInit {
  public buttons = CALCULATOR_BUTTONS;
  constructor(private calculatrService: CalculatorService) {}

  ngOnInit(): void {}

  buttonClicked(value: number | OperatorType): void {
    this.calculatrService.setFirstNumber(value.toString());
  }
}
