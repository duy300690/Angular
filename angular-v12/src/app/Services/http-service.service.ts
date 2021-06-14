import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private REST_API_SERVER = 'https://randomuser.me/api/?results=';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getRandomUsers(users: number = 1): Observable<any> {
    const url = `${this.REST_API_SERVER}` + users;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
