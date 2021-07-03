import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router
  ) {}

  public students: Student[] = [];

  private loadData(): void {
    this.serverHttp.getStudents().subscribe((data) => {
      this.students = data;
      this.common.setTotalStudent(data.length);
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  public addStudent(): void {
    this.router.navigate(['student-form', 0]);
  }

  public deleteStudent(student: Student): void {
    this.serverHttp.deleteStudent(student).subscribe((data) => {
      this.loadData();
    });
  }

  public editStudent(student: Student): void {
    this.router.navigate(['student-form', student.id]);
  }

  public sort(column: string, sort: string): void {
    if (sort === 'up') {
      this.students = _.orderBy(this.students, [column], ['desc']);
    } else {
      this.students = _.orderBy(this.students, [column], ['asc']);
    }
  }
}
