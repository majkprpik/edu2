import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlEditorComponent } from './html-editor.component';
import { DxHtmlEditorModule } from 'devextreme-angular';



@NgModule({
  declarations: [HtmlEditorComponent],
  imports: [
    CommonModule,
    DxHtmlEditorModule
  ]
})
export class HtmlEditorModule { }
