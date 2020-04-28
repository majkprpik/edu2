import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrmComponent } from './hrm.component';
import { HRMRoutingModule } from './hrm-routing.module';



@NgModule({
  declarations: [HrmComponent],
  imports: [
    CommonModule, HRMRoutingModule  
  ]
})
export class HrmModule { }
