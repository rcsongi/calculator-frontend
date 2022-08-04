import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
