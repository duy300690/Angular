import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = 'Minh Duy';
  public age: number = 28;
  public fruits: string[] = ['Cam', 'Xoai', 'Man', 'Buoi'];

  public fruitsObj = [
    { name: 'Tao', price: 12000, discount: true },
    { name: 'Nho', price: 23000, discount: false },
    { name: 'Man', price: 18000, discount: false },
  ];
  constructor() {}

  public ngOnInit(): void {
    console.log('trai cay: ', this.fruits);
  }

  public resetForm(): void {
    this.name = '';
    this.age = 0;
  }
}
