import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttComponent } from './gantt.component';
import { DxGanttModule } from 'devextreme-angular';



@NgModule({
  declarations: [GanttComponent],
  imports: [
    CommonModule,
    DxGanttModule
  ]
})
export class GanttModule { }
