import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Employee } from "src/app/models/employee.model";
import { Observable } from "rxjs";

import * as EmployeesActions from '../../actions/employees.action';
import * as fromApp from '../../store/app.reducer'

@Component({
  templateUrl: "profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent {
  employee: any;
  employees: Observable<{ employees: Employee[] }>;
  colCountByScreen: object;

  constructor(private store: Store<fromApp.AppState>) {
    this.employees = this.store.select("employees");
    this.employee = {
      ID: 7,
      FirstName: "Sandra",
      LastName: "Johnson",
      Prefix: "Mrs.",
      Position: "Controller",
      Picture: "images/employees/06.png",
      BirthDate: new Date("1974/11/15"),
      HireDate: new Date("2005/05/11"),
      /* tslint:disable-next-line:max-line-length */
      Notes:
        "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
      Address: "4600 N Virginia Rd."
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }

  addEmployee() {
    let newEmployee = new Employee(
      this.imeNoviDjelatnik,
      null,
      null,
      "Implementacija 4",
      "Kat I",
      null,
      Math.floor(Math.random() * 10000)
    );

    this.store.dispatch(new EmployeesActions.AddEmployee(newEmployee));
    this.imeNoviDjelatnik = '';
  }
  
  editDjelatnik = '';
  imeNoviDjelatnik = '';
  deleteEmployee(djelatnik: Employee) {
    this.store.dispatch(new EmployeesActions.DeleteEmployee(djelatnik.hrkadroviid))
  }

  updateEmployee(djelatnik: Employee) {
    this.store.dispatch(new EmployeesActions.EditEmployee({...djelatnik, Djelatnik: this.editDjelatnik}))
  }
}
