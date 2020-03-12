import * as fromEmployees from "../reducers/employees.reducer";
import * as fromAuth from "../auth/store/auth.reducer";
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  employees: fromEmployees.State;
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    employees: fromEmployees.employeesReducer,
    auth: fromAuth.authReducer
}