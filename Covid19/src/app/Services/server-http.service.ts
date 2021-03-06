import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { CovidInfo } from '../models/covid-info';

@Injectable({
  providedIn: 'root',
})
export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private REST_API_SERVER = 'https://api.covid19api.com';
  private REST_API_SERVER_DATABASE = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      console.error('An error occurred: ', err.error.message);
    } else {
      console.error(
        `Backend returned code: ${err.status}, ` + `body was: ${err.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }

  public getAPISummary(): Observable<any> {
    const url = `${this.REST_API_SERVER}/summary`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public putToData(data: CovidInfo): Observable<CovidInfo> {
    const url = `${this.REST_API_SERVER_DATABASE}/history`;
    return this.httpClient
      .post<CovidInfo>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
