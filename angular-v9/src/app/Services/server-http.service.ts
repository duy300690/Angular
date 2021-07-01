import { Student } from './../models/Student';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServerHttpService {
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

  public getProfile(): Observable<any> {
    const url = `${this.REST_API_SERVER}/profile`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getPosts(): Observable<any> {
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public addPost(data: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getStudents(): Observable<any> {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public addStudent(data: Student): Observable<Student> {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .post<Student>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
