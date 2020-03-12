import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeListComponent } from './tree-list.component';
import { DxTreeListModule } from 'devextreme-angular';



@NgModule({
  declarations: [TreeListComponent],
  imports: [
    CommonModule,
    DxTreeListModule
  ]
})
export class TreeListModule { }
