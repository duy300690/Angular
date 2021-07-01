import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServerHttpService } from '../Services/server-http.service';
import { CommonService } from '../Services/common.service';
import { Student } from '../models/Student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  public studentForm = new FormGroup({
    code: new FormControl(''),
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    picture: new FormControl(''),
  });

  constructor(
    private serverHttp: ServerHttpService,
    private router: Router,
    private common: CommonService
  ) {}

  ngOnInit(): void {}

  public onSubmit(): void {
    let newStudent: any = {};
    for (const controlName in this.studentForm.controls) {
      if (controlName)
        newStudent[controlName] = this.studentForm.controls[controlName].value;
    }
    this.serverHttp.addStudent(newStudent).subscribe((data) => {
      this.router.navigate(['students']);
    });
  }

  private data(): Student {
    let newStudent: any = {};
    for (const controlName in this.studentForm.controls) {
      if (controlName)
        newStudent[controlName] = this.studentForm.controls[controlName].value;
    }
    return newStudent;
  }

  public addAndGoToList(): void {
    this.serverHttp.addStudent(this.data()).subscribe((data) => {
      this.router.navigate(['students']);
    });
  }

  public addAndClear(): void {
    this.serverHttp.addStudent(this.data()).subscribe((data) => {
      this.studentForm.reset();
      this.common.incrimentStudent();
    });
  }
}
