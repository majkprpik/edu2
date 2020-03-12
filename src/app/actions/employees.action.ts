import { Action } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

export class AddEmployee implements Action {
    readonly type = ADD_EMPLOYEE;
    constructor(public payload: Employee){}
}

export class EditEmployee implements Action {
    readonly type = EDIT_EMPLOYEE;
    constructor(public payload: Employee){}
}

export class DeleteEmployee implements Action {
    readonly type = DELETE_EMPLOYEE;
    constructor(public payload: number){}
}


export type EmployeesActions = AddEmployee | EditEmployee | DeleteEmployee;