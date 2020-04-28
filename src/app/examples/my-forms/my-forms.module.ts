import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormsComponent } from './my-forms.component';
import { DxFormModule } from 'devextreme-angular';



@NgModule({
  declarations: [MyFormsComponent],
  imports: [
    CommonModule,
    DxFormModule
  ]
})
export class MyFormsModule { }
