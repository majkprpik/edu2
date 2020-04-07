import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IGenericServiceBody } from 'src/app/models/core/igeneric-service-body';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  dataUrl = environment.genericServiceUrlForData;

  constructor(private http: HttpClient) {}

  getData(body: IGenericServiceBody): Observable<any> {
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
      .pipe(map((response: any) => response));
  }
}
