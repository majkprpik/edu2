import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { SpinGenericUIComponent } from './spin-generic-ui.component';

const routes: Routes = [
  {
    path: "",
    component: SpinGenericUIComponent,    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpinGenericUIRoutingModule {}
