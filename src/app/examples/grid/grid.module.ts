import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GridComponent } from "./grid.component";

import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';

@NgModule({
  declarations: [GridComponent],
  imports: [CommonModule, DxDataGridModule, DxTemplateModule, DxBulletModule]
})
export class GridModule {}
