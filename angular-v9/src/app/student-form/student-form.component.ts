import { ActivatedRoute, Router, Routes } from '@angular/router';
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
  public studentId: number = 0;
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
    private common: CommonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.studentId = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    if (this.studentId > 0) this.loadData(this.studentId);
  }

  private loadData(studentId: number): void {
    this.serverHttp.getStudentById(studentId).subscribe((data) => {
      console.log(data);
      for (let controlName in this.studentForm.controls) {
        if (controlName) debugger;
        this.studentForm.controls[controlName].setValue(data[controlName]);
      }
    });
  }

  private createNewData(): Student {
    let newStudent: any = {};
    for (const controlName in this.studentForm.controls) {
      if (controlName)
        newStudent[controlName] = this.studentForm.controls[controlName].value;
    }
    return newStudent;
  }

  public saveAndGoToList(): void {
    if (this.studentId > 0) {
      this.serverHttp
        .modifyStudent(this.studentId, this.createNewData())
        .subscribe((data) => {});
    } else {
      this.serverHttp.addStudent(this.createNewData()).subscribe((data) => {});
    }
    this.router.navigate(['students']);
  }

  public saveAndClear(): void {
    if (this.studentId > 0) {
      this.serverHttp
        .modifyStudent(this.studentId, this.createNewData())
        .subscribe((data) => {});
    } else {
      this.serverHttp.addStudent(this.createNewData()).subscribe((data) => {
        this.studentForm.reset();
        this.common.incrimentStudent();
      });
    }
  }

  public randomStudent(): void {
    this.serverHttp.getRandomStudent().subscribe((data) => {
      if (data && data.results && data.results.length > 0) {
        let student = data.results[0];

        this.studentForm.controls.code.setValue(
          `${student.id.name || ''}-${student.id.value || ''}`
        );
        this.studentForm.controls.gender.setValue(
          `${student.gender === 'male' ? 'true' : 'false'}`
        );
        this.studentForm.controls.firstName.setValue(student.name.first);
        this.studentForm.controls.lastName.setValue(student.name.last);
        this.studentForm.controls.dob.setValue(student.dob.date);
        this.studentForm.controls.email.setValue(student.email);
        this.studentForm.controls.phone.setValue(student.phone);
        this.studentForm.controls.picture.setValue(student.picture.large);
      }
    });
  }
}
