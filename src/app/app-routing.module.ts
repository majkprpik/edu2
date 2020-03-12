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
import { DiagramComponent } from "./pages/diagram/diagram.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "display-data",
    component: DisplayDataComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "diagram",
    component: DiagramComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "login-form",
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "**",
    redirectTo: "home",
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
    FormsModule,
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    DisplayDataComponent,
    DiagramComponent
  ]
})
export class AppRoutingModule {}
