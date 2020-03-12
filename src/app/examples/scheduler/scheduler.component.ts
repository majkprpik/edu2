import { Component, OnInit } from "@angular/core";
import DataSource from 'devextreme/data/data_source';
import { AppService, EmployeeScheduler } from '../../services/app.service';

@Component({
  selector: "app-scheduler",
  templateUrl: "./scheduler.component.html",
  styleUrls: ["./scheduler.component.scss"]
})
export class SchedulerComponent implements OnInit {
  dataSource: any;
  currentDate: Date = new Date(2016, 7, 2, 11, 30);
  resourcesDataSource: EmployeeScheduler[];

  constructor(service: AppService) {
    this.dataSource = new DataSource({
      store: service.getData()
    });

    this.resourcesDataSource = service.getEmployeesScheduler();
  }

  markWeekEnd(cellData) {
    function isWeekEnd(date) {
      var day = date.getDay();
      return day === 0 || day === 6;
    }
    var classObject = {};
    classObject["employee-" + cellData.groups.employeeID] = true;
    classObject["employee-weekend-" + cellData.groups.employeeID] = isWeekEnd(
      cellData.startDate
    );
    return classObject;
  }

  markTraining(cellData) {
    var classObject = {
      "day-cell": true
    };

    classObject[
      SchedulerComponent.getCurrentTraining(
        cellData.startDate.getDate(),
        cellData.groups.employeeID
      )
    ] = true;
    return classObject;
  }

  static getCurrentTraining(date, employeeID) {
    var result = (date + employeeID) % 3,
      currentTraining = "training-background-" + result;

    return currentTraining;
  }

  ngOnInit() {}
}
