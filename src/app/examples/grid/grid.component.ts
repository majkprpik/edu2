import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  dataSource: DataSource;
  collapsed = false;
  contentReady = (e) => {
      if(!this.collapsed) {
          this.collapsed = true;
          e.component.expandRow(["EnviroCare"]);
      }
  };
  customizeTooltip = (pointsInfo) => {
      return { text: parseInt(pointsInfo.originalValue) + "%" };
  }

  constructor(service: AppService) {
      this.dataSource = service.getDataSource();
  }

  ngOnInit() {
  }

}
