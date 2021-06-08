import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = 'Minh Duy';
  public age: number = 28;
  constructor() {}

  ngOnInit(): void {}

  public resetForm(): void {
    this.name = '';
    this.age = 0;
  }
}
