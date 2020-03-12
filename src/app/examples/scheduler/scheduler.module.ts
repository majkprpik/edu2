import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler.component';
import { DxSchedulerModule, DxTemplateModule } from 'devextreme-angular';



@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule,
    DxSchedulerModule,
    DxTemplateModule
  ]
})
export class SchedulerModule { }
