import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  CalculatorButtonModel,
  OperatorType,
} from './components/calculator-buttons/calculator-buttons.model';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private firstNumber$ = new BehaviorSubject<string | undefined>(undefined);
  private secondNumber$ = new BehaviorSubject<number | undefined>(undefined);
  private operator$ = new BehaviorSubject<CalculatorButtonModel | undefined>(
    undefined
  );
  private displayValue$ = new BehaviorSubject<string>('');

  constructor() {}

  public get getDisplayValue(): Observable<string> {
    return this.displayValue$.asObservable();
  }

  setFirstNumber(value: string): void {
    this.firstNumber$.next(value);

    this.displayValue$.next(value.toString());
  }
}
