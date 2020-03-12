import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Employee } from "../models/employee.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DavorService {
  dataUrl = environment.genericServiceUrlForData;

  constructor(private http: HttpClient) {}

  
  public getCharacters(): Observable<any> {
      return this.http.get("https://rickandmortyapi.com/api/character");
  }
}
