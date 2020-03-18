import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GridComponent } from "./grid.component";

import { OverviewModule } from './overview/overview.module';
import { GridRoutingModule } from './grid-routing.module';

@NgModule({
  declarations: [GridComponent],
  imports: [CommonModule, GridRoutingModule, OverviewModule]
})
export class GridModule {}
