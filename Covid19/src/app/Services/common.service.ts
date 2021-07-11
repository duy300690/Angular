import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private REST_API_SERVER = 'http://localhost:3000';
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

  public getListHistory(): Observable<any> {
    const url = `${this.REST_API_SERVER}/history`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
