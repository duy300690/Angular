import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  public name: string = '';
  constructor(private common: CommonService) {}

  public ngOnInit(): void {}

  public submitForm(): void {
    this.common.submitDate({ name: this.name, age: 31 });
  }
}
