import { Component, OnInit } from '@angular/core';
import { ComplaintsWithPercent, AppService } from 'src/app/services/app.service';
import DataSource from 'devextreme/data/data_source';
import { DavorService } from 'src/app/services/davor.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-davor2',
  templateUrl: './davor2.component.html',
  styleUrls: ['./davor2.component.scss']
})
export class Davor2Component implements OnInit {

  dataSource: Employee[];
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

  constructor(private _employeeService: EmployeesService) {
      this._employeeService.getImenik().subscribe((res:Employee[]) => this.dataSource = res);
  }

  ngOnInit() {
  }


}
