import { Component, OnInit } from '@angular/core';
import { AppService, ResourceAssignment, Resource, Dependency, Task, TaskGantt } from 'src/app/services/app.service';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss']
})
export class GanttComponent implements OnInit {

  tasks: TaskGantt[];
  dependencies: Dependency[];
  resources: Resource[];
  resourceAssignments: ResourceAssignment[];

  constructor(service: AppService) {
      this.tasks = service.getTasksGantt();
      this.dependencies = service.getDependencies();
      this.resources = service.getResources();
      this.resourceAssignments = service.getResourceAssignments();
  }

  ngOnInit() {
  }
}
