import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  public totalStudents: number = 0;
  public totalStudent$ = new BehaviorSubject<number>(0);
  public setTotalStudent(total: number) {
    this.totalStudents = total;
    this.totalStudent$.next(total);
  }
}
