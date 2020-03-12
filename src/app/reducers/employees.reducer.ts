import { Action } from "@ngrx/store";
import { Employee } from "../models/employee.model";
import * as EmployeesActions from "../actions/employees.action";

export interface State {
  employees: Employee[]
}

const initialState = {
  employees: [
    new Employee(
      "ANTOLOVIĆ ANA",
      null,
      null,
      "Implementacija 4",
      "Kat I",
      null,
      1209
    ),
    new Employee(
      "AZENIĆ DEJAN",
      "110",
      "095 99 99 911",
      "Razvoj 2",
      "Kat I",
      "Software Developer",
      66
    )
  ]
};

export function employeesReducer(
  state = initialState,
  action: EmployeesActions.EmployeesActions
) {
  switch (action.type) {
    case EmployeesActions.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    case EmployeesActions.EDIT_EMPLOYEE:
      const employee = state.employees.find(
        e => e.hrkadroviid == action.payload.hrkadroviid
      );
      const updatedEmployee = {
        ...employee,
        ...action.payload
      };
      const updatedEmployees = [...state.employees];
      let tempIndex = updatedEmployees.findIndex(emp => emp.hrkadroviid == action.payload.hrkadroviid)
      updatedEmployees[tempIndex] = updatedEmployee;

      return {
        ...state,
        employees: updatedEmployees
      };
    case EmployeesActions.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(emp => emp.hrkadroviid != action.payload)
      };
    default:
      return state;
  }
}
