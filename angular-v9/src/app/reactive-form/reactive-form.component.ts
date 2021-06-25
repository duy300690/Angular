import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  public profile = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  public onSubmit(): void {
    console.log('Name: ', this.profile.controls.name.value);
    console.log('Age: ', this.profile.controls.age.value);
  }
}
