import { MatSidenav } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-v9';
  @ViewChild('sidenav') sidenav: any;
  public isOpened: boolean = false;

  public openLeftSide(): void {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }
  public closeLeftSide(): void {
    this.isOpened = false;
  }
}
