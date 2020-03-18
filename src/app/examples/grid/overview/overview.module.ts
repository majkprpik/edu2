import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverviewComponent } from "./overview.component";

import {
  DxBulletModule,
  DxTemplateModule,
  DxDataGridModule
} from "devextreme-angular";

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, DxDataGridModule, DxTemplateModule, DxBulletModule]
})
export class OverviewModule {}
