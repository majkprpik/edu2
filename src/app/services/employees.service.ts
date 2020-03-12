import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Employee } from "../models/employee.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  dataUrl = environment.genericServiceUrlForData;

  constructor(private http: HttpClient) {}

  getImenik(): Observable<Employee[]> {
    let body = {
      db: "Spin20160126",
      server: "Jupiter2012",
      queries: [
        {
          query: "spwHRMDjelatniciQuery",
          params: {
            action: "1"
          },
          tablename: "imenik"
        }
      ]
    };

    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + environment.authToken
    });

    let options = { headers: headers };
    return this.http
      .post(
        this.dataUrl,
        JSON.stringify({
          ...body
        }),
        options
      )
      .pipe(map((response: any) => <Employee[]>response.imenik));
  }
}
