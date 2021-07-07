import { Component } from '@angular/core';
import { CovidInfo } from './models/covid-info';
import { ServerHttpService } from './Services/server-http.service';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'covid19-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Covid19';
  public globalData: CovidInfo = {
    date: new Date(),
    country: '',
    newConfirmed: 0,
    newDeaths: 0,
    newRecovered: 0,
    totalConfirmed: 0,
    totalDeaths: 0,
    totalRecovered: 0,
  };
  public countriesData: CovidInfo[] = [];
  public isSortUp: boolean = false;
  public keySort: string = '';

  constructor(private serverHttp: ServerHttpService) {}

  public ngOnInit(): void {
    this.serverHttp.getSummary().subscribe((data) => {
      this.globalData.date = data.Global.Date;
      this.globalData.newConfirmed = data.Global.NewConfirmed;
      this.globalData.newDeaths = data.Global.NewDeaths;
      this.globalData.newRecovered = data.Global.NewRecovered;
      this.globalData.totalConfirmed = data.Global.TotalConfirmed;
      this.globalData.totalDeaths = data.Global.TotalDeaths;
      this.globalData.totalRecovered = data.Global.TotalRecovered;

      if (data.Countries && data.Countries.length) {
        for (let item of data.Countries) {
          let obj: CovidInfo = {
            date: new Date(),
            country: item.Country,
            newConfirmed: item.NewConfirmed,
            newDeaths: item.NewDeaths,
            newRecovered: item.NewRecovered,
            totalConfirmed: item.TotalConfirmed,
            totalDeaths: item.TotalDeaths,
            totalRecovered: item.TotalRecovered,
          };

          this.countriesData.push(obj);
        }
      }
    });
  }

  public orderBy(key: string): void {
    this.keySort = key;
    this.countriesData = _.orderBy(
      this.countriesData,
      key,
      this.isSortUp ? 'asc' : 'desc'
    );

    this.isSortUp = !this.isSortUp;
  }
}
