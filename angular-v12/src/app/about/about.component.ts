import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public loginName: string = 'admin';
  public myColor: string = 'red';
  public counter: number = 0;
  public counterBinhPhuong: number = 0;

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.getCounter();
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.setCounter(this.common.getCounter() + 1);
  }
}
