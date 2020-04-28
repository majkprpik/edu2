import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {
  SideNavOuterToolbarModule,
  SideNavInnerToolbarModule,
  SingleCardModule
} from "./layouts";
import { FooterModule, LoginFormModule } from "./shared/components";
import { AuthService, ScreenService, AppInfoService } from "./shared/services";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import * as fromApp from "./store/app.reducer";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { HrmModule } from './hrm/hrm.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    HrmModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
