import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../Services/http-service.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  constructor(private httpServiceService: HttpServiceService) {}
  public users: any[] = [];

  public ngOnInit(): void {
    this.httpServiceService.getRandomUsers(5).subscribe((data) => {
      data.results.forEach((result: any) => {
        this.users.push({
          firstName: result.name.first,
          lastName: result.name.last,
          gender: result.gender,
          email: result.email,
          phone: result.phone,
          country: result.location.country,
        });
      });
    });
    console.log(this.users);
  }
}
