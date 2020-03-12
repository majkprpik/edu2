import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ExamplesComponent } from "./examples.component";
import { GridComponent } from "./grid/grid.component";
import { ExamplesRoutingModule } from "./examples-routing.modules";
import { GridModule } from "./grid/grid.module";
import { GanttModule } from './gantt/gantt.module';
import { ChartModule } from './chart/chart.module';
import { PivotModule } from './pivot/pivot.module';
import { HtmlEditorModule } from './html-editor/html-editor.module';
import { TreeListModule } from './tree-list/tree-list.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@NgModule({
  imports: [CommonModule, ExamplesRoutingModule, GridModule, GanttModule, ChartModule, PivotModule, HtmlEditorModule, TreeListModule, SchedulerModule],
  declarations: [ExamplesComponent]
})
export class ExamplesModule {}
