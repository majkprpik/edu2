import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee } from 'src/app/models/employee.model';
import { Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducer'

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  employees: Observable<{ employees: Employee[] }>;
  constructor(private store: Store<fromApp.AppState>) {
    this.employees = this.store.select("employees");
  }
}
    