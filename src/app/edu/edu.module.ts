import { NgModule } from "@angular/core";

import { EduComponent } from "./edu.component";
import { EduRoutingModule } from "./edu-routing.module";
import { AnaModule } from "./ana/ana.module";
import { AndreaModule } from "./andrea/andrea.module";
import { DxBoxModule, DxResponsiveBoxModule } from "devextreme-angular";
import { CommonModule } from "@angular/common";
import { DavorModule } from './davor/davor.module';
import { DenisModule } from './denis/denis.module';
import { FilipModule } from './filip/filip.module';
import { IvanModule } from './ivan/ivan.module';
import { JankoModule } from './janko/janko.module';
import { MajaModule } from './maja/maja.module';
import { NemanjaModule } from './nemanja/nemanja.module';
import { ZdravkoModule } from './zdravko/zdravko.module';
import { MiroslavModule } from './miroslav/miroslav.module';
import { HrvojeModule } from './hrvoje/hrvoje.module';
import { GoranModule } from './goran/goran.module';
import { SenkovicModule } from './senkovic/senkovic.module';

@NgModule({
  imports: [
    CommonModule,
    DxBoxModule,
    DxResponsiveBoxModule,
    EduRoutingModule,
    AnaModule,
    AndreaModule,
    DavorModule, 
    DenisModule, 
    FilipModule, 
    GoranModule,
    IvanModule, 
    JankoModule, 
    MajaModule, 
    NemanjaModule, 
    ZdravkoModule, 
    MiroslavModule, 
    HrvojeModule, 
    SenkovicModule
  ],
  declarations: [EduComponent]
})
export class EduModule {}
