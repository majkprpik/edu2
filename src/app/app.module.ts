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
import * as fromApp from './store/app.reducer'

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
