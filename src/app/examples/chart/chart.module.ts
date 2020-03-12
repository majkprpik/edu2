import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { DxChartModule } from 'devextreme-angular';



@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,    
    DxChartModule
  ]
})
export class ChartModule { }
