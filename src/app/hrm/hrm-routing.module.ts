import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HrmComponent } from './hrm.component';

const routes: Routes = [
  {
    path: "",
    component: HrmComponent,    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HRMRoutingModule {}
