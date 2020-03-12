import { Component, OnInit } from "@angular/core";

import { AppService, Task, Employee, Priority } from '../../services/app.service';

@Component({
  selector: "app-tree-list",
  templateUrl: "./tree-list.component.html",
  styleUrls: ["./tree-list.component.scss"]
})
export class TreeListComponent implements OnInit {
  tasks: Task[];
  employees: Employee[];
  priorities: Priority[];
  statuses: string[];

  constructor(service: AppService) {
    this.tasks = service.getTasks();
    this.employees = service.getEmployees();
    this.priorities = service.getPriorities();

    this.statuses = [
      "Not Started",
      "Need Assistance",
      "In Progress",
      "Deferred",
      "Completed"
    ];
  }

  getCompletionText(cellInfo) {
    return cellInfo.valueText + "%";
  }
  ngOnInit() {}
}
