import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { TestComponent } from "./test.component";
import { TestChildComponent } from "./test-child/test-child.component";
import { FormsModule } from "@angular/forms";
import { PodebljajDirective } from "./directive/podebljaj.directive";
import { ZelenaPozadinaDirective } from "./directive/zelena-pozadina.directive";
import { BoldMouseOverDirective } from "./directive/bold-mouse-over.directive";
import { ItalicMouseClickDirective } from "./directive/italic-mouse-click.directive";
import { DirectiveWithPropertyDirective } from "./directive/directive-with-property.directive";
import { DirectiveWithMainPropertyDirective } from "./directive/directive-with-main-property.directive";
import { CustomStructuralDirectiveDirective } from "./directive/custom-structural-directive.directive";
import { SetColorDirectiveDirective } from "./directive/set-color-directive.directive";
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestRoutingModule
  ],
  declarations: [
    TestComponent,
    TestChildComponent,
    PodebljajDirective,
    ZelenaPozadinaDirective,
    BoldMouseOverDirective,
    ItalicMouseClickDirective,
    DirectiveWithPropertyDirective,
    DirectiveWithMainPropertyDirective,
    CustomStructuralDirectiveDirective,
    SetColorDirectiveDirective
  ]
})
export class TestModule {}
