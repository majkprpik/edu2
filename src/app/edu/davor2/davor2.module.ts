import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Davor2Component } from './davor2.component';
import {
  DxBulletModule,
  DxTemplateModule,
  DxDataGridModule
} from "devextreme-angular";



@NgModule({
  declarations: [Davor2Component],
  imports: [
    CommonModule,
    DxBulletModule,
    DxTemplateModule,
    DxDataGridModule
  ]
})
export class Davor2Module { }
