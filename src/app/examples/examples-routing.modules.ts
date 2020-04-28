import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { ExamplesComponent } from "./examples.component";
import { GridComponent } from "./grid/grid.component";
import { ChartComponent } from "./chart/chart.component";
import { GanttComponent } from "./gantt/gantt.component";
import { PivotComponent } from "./pivot/pivot.component";
import { HtmlEditorComponent } from "./html-editor/html-editor.component";
import { TreeListComponent } from "./tree-list/tree-list.component";
import { SchedulerComponent } from "./scheduler/scheduler.component";
import { MyFormsComponent } from './my-forms/my-forms.component';

const routes: Routes = [
  {
    path: "",
    component: ExamplesComponent,
    children: [
      {
        path: "grid",
        component: GridComponent
      },
      {
        path: "gantt",
        component: GanttComponent
      },
      {
        path: "chart",
        component: ChartComponent
      },
      {
        path: "pivot",
        component: PivotComponent
      },
      {
        path: "html-editor",
        component: HtmlEditorComponent
      },
      {
        path: "tree-list",
        component: TreeListComponent
      },
      {
        path: "scheduler",
        component: SchedulerComponent
      },
      {
        path: "forms",
        component: MyFormsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
