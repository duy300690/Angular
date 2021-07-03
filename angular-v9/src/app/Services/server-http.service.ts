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

  public getStudents(): Observable<any> {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getStudentById(studentId: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/students/${studentId}`;
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

  public deleteStudent(data: Student): Observable<Student> {
    const url = `${this.REST_API_SERVER}/students/${data.id}`;
    return this.httpClient
      .delete<Student>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public modifyStudent(studentId: number, data: Student): Observable<Student> {
    const url = `${this.REST_API_SERVER}/students/${studentId}`;
    return this.httpClient
      .put<Student>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getRandomStudent(): Observable<any> {
    const url = `https://randomuser.me/api?results=1`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
