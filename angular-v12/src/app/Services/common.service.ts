import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  private counter: number = 0;
  public getCounter(): number {
    return this.counter;
  }

  public setCounter(n: number): void {
    this.counter = n;
  }

  public binhPhuong(n: number): number {
    return n * n;
  }

  public submitDate(date: any): void {
    console.log('send data to server: Data= ', date);
  }
}
