import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorContainerComponent } from './components/calculator-container/calculator-container.component';
import { CalculatorDisplayComponent } from './components/calculator-display/calculator-display.component';
import { CalculatorButtonsComponent } from './components/calculator-buttons/calculator-buttons.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CalculatorContainerComponent,
    CalculatorDisplayComponent,
    CalculatorButtonsComponent,
  ],
  imports: [CommonModule, CalculatorRoutingModule, SharedModule],
})
export class CalculatorModule {}
