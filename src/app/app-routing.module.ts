import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginFormComponent } from "./shared/components";
import { AuthGuardService } from "./shared/services";
import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { DisplayDataComponent } from "./pages/display-data/display-data.component";
import {
  DxDataGridModule,
  DxFormModule,
  DxDiagramModule
} from "devextreme-angular";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "edu",
    loadChildren: () => import("./edu/edu.module").then(m => m.EduModule)
  },
  {
    path: "predavanja",
    loadChildren: () =>
      import("./pages/test/test.module").then(m => m.TestModule)
  },
  {
    path: "examples",
    loadChildren: () =>
      import("./examples/examples.module").then(m => m.ExamplesModule)
  },
  // {
  //   path: "display-data",
  //   component: DisplayDataComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: "profile",
  //   component: ProfileComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: "home",
  //   component: HomeComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: "diagram",
  //   component: DiagramComponent,
  //   canActivate: [AuthGuardService]
  // },
  {
    path: "login-form",
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "**",
    redirectTo: "predavanja",
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxFormModule,
    DxDiagramModule,
    BrowserModule,
    FormsModule
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    DisplayDataComponent
  ]
})
export class AppRoutingModule {}
