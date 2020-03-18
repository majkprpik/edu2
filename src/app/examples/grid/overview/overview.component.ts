import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

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
