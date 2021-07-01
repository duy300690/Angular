import { Component, ViewChild } from '@angular/core';
import { CommonService } from './Services/common.service';
import { ServerHttpService } from './Services/server-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-v9';
  @ViewChild('sidenav') sidenav: any;
  public isOpened: boolean = false;
  public totalStudents: number = 0;

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService
  ) {}

  public openLeftSide(): void {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }
  public closeLeftSide(): void {
    this.isOpened = false;
  }

  public ngOnInit(): void {
    this.common.totalStudent$.subscribe((total) => {
      this.totalStudents = total;
    });

    if (this.common.totalStudents === 0) {
      this.serverHttp.getStudents().subscribe((data) => {
        this.common.setTotalStudent(data.length);
      });
    }
  }
}
