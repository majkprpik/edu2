import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotComponent } from './pivot.component';
import { DxPivotGridModule, DxChartModule } from 'devextreme-angular';



@NgModule({
  declarations: [PivotComponent],
  imports: [
    CommonModule,    
    DxPivotGridModule,
    DxChartModule
  ]
})
export class PivotModule { }
