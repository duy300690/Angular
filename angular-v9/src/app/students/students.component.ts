import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

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
  ngOnInit(): void {
    this.serverHttp.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  public addStudent(): void {
    this.router.navigate(['student-form']);
  }
}
