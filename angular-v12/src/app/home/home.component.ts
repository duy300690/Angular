import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

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

  public dataVietnam: any[] = [
    { province: 'Select province', district: [] },
    {
      province: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      province: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      province: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];

  public districts: string[] = ['Select district'];
  public counter: number = 0;
  public counterBinhPhuong: number = 0;

  constructor(private common: CommonService) {}

  public ngOnInit(): void {
    this.counter = this.common.getCounter();
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.setCounter(this.common.getCounter() + 1);
  }

  public resetForm(): void {
    this.name = '';
    this.age = 0;
  }

  public changeProvince(event: any): void {
    const province = event.target.value;

    this.districts =
      this.dataVietnam.find((data) => data.province === province)?.district ||
      [];
  }
}
