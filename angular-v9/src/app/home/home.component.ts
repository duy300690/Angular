import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  public vehicles: string[] = ['Toyota', 'Honda', 'Yamaha'];
  public name: string = '';
  public age: number = 59;
  ngOnInit(): void {}

  public UpAge(): void {
    this.age = this.age + 1;
  }
}
