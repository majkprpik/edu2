import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DxDiagramModule, DxDiagramComponent } from 'devextreme-angular';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent {

  @ViewChild(DxDiagramComponent, { static: false }) diagram: DxDiagramComponent;

  constructor() {
      // http.get('data/diagram-flow.json').subscribe(data => {
      //     this.diagram.instance.import(JSON.stringify(data));
      // }, err => {
      //     throw 'Data Loading Error'
      // });
  }
}
