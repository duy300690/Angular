import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public name: string = '';
  public password: string = '';
  public vehicles: string[] = ['', 'Toyota', 'Honda', 'Yamaha', 'Nissan'];
  public selectedVehicle: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submitForm(): void {
    console.log('Name: ', this.name);
    console.log('Password: ', this.password);
    console.log('Vehicle: ', this.selectedVehicle);
  }

  public selectVehicle(event: any): void {
    this.selectedVehicle = event.target.value;
  }
}
