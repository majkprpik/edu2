import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinGenericUIComponent } from './spin-generic-ui.component';
import { SpinGenericUIRoutingModule } from './spin-generic-ui-routing.module';
import { DxBoxModule, DxButtonModule, DxTextAreaModule, DxTreeViewModule, DxFormModule } from 'devextreme-angular';



@NgModule({
  declarations: [SpinGenericUIComponent],
  imports: [
    CommonModule,
    SpinGenericUIRoutingModule,
    DxBoxModule,
    DxButtonModule,
    DxTextAreaModule,
    DxTreeViewModule,
    DxFormModule
  ]
})
export class SpinGenericUIModule { }
