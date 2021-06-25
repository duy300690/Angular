import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private common: CommonService) {}
  public vehicles: string[] = ['Toyota', 'Honda', 'Yamaha'];
  public name: string = '';
  public age: number = this.common.age;
  ngOnInit(): void {}

  public UpAge(): void {
    this.common.age++;
    this.age = this.common.age;
  }
}
