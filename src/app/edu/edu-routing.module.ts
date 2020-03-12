import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { EduComponent } from "./edu.component";
import { AnaComponent } from './ana/ana.component';
import { AndreaComponent } from './andrea/andrea.component';
import { DavorComponent } from './davor/davor.component';
import { DenisComponent } from './denis/denis.component';
import { FilipComponent } from './filip/filip.component';
import { GoranComponent } from './goran/goran.component';
import { HrvojeComponent } from './hrvoje/hrvoje.component';
import { IvanComponent } from './ivan/ivan.component';
import { JankoComponent } from './janko/janko.component';
import { MajaComponent } from './maja/maja.component';
import { MiroslavComponent } from './miroslav/miroslav.component';
import { NemanjaComponent } from './nemanja/nemanja.component';
import { SenkovicComponent } from './senkovic/senkovic.component';
import { ZdravkoComponent } from './zdravko/zdravko.component';

const routes: Routes = [
  {
    path: "",
    component: EduComponent,
    children: [
      {
        path: "ana",
        component: AnaComponent
      },
      {
        path: "andrea",
        component: AndreaComponent
      },
      {
        path: "davor",
        component: DavorComponent
      },
      {
        path: "denis",
        component: DenisComponent
      },
      {
        path: "filip",
        component: FilipComponent
      },
      {
        path: "goran",
        component: GoranComponent
      },
      {
        path: "hrvoje",
        component: HrvojeComponent
      },
      {
        path: "ivan",
        component: IvanComponent
      },
      {
        path: "janko",
        component: JankoComponent
      },
      {
        path: "maja",
        component: MajaComponent
      },
      {
        path: "miroslav",
        component: MiroslavComponent
      },
      {
        path: "nemanja",
        component: NemanjaComponent
      },
      {
        path: "senkovic",
        component: SenkovicComponent
      },
      {
        path: "zdravko",
        component: ZdravkoComponent
      },
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent,
      // },
      // {
      //   path: 'profile',
      //   component: ProfileComponent,
      // },
      // {
      //   path: 'odsustvo',
      //   component: OdsustvoComponent,
      // },
      // {
      //   path: 'skolovanje',
      //   component: SkolovanjeComponent,
      // },
      // {
      //   path: 'resursi',
      //   component: ResursiComponent,
      // },
      // {
      //   path: 'razni-izvjestaji',
      //   component: RazniIzvjestajiComponent,
      // },
      // {
      //   path: 'djelatnici',
      //   component: DjelatniciComponent,
      // },
      // {
      //   path: 'dokumenti',
      //   component: DokumentiComponent,
      // },
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full',
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EduRoutingModule {}
