import { Component } from '@angular/core';
import { CovidInfo } from './models/covid-info';
import { ServerHttpService } from './Services/server-http.service';
import * as _ from 'lodash';
import * as moment from 'moment';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label as ng2Chart } from 'ng2-charts';
import { CommonService } from './Services/common.service';

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
  public countriesData: any[] = [];

  public isSortUp: boolean = false;
  public keySort: string = '';

  public dataJson: any = null;

  constructor(
    private serverHttp: ServerHttpService,
    private common: CommonService
  ) {}

  public ngOnInit(): void {
    this.common.getListHistory().subscribe((data) => {
      this.dataJson = _.orderBy(data, 'Date', 'desc')[0];
      this.getGlobal(this.dataJson.Global);
      this.getCountryData(this.dataJson.Countries);
    });

    this.serverHttp.getAPISummary().subscribe((data) => {
      if (data && this.dataJson && this.dataJson.ID !== data.ID) {
        this.serverHttp.putToData(data).subscribe();
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

  private getGlobal(serverData: any): void {
    this.globalData.date = serverData.Date;
    this.globalData.newConfirmed = serverData.NewConfirmed;
    this.globalData.newDeaths = serverData.NewDeaths;
    this.globalData.newRecovered = serverData.NewRecovered;
    this.globalData.totalConfirmed = serverData.TotalConfirmed;
    this.globalData.totalDeaths = serverData.TotalDeaths;
    this.globalData.totalRecovered = serverData.TotalRecovered;
  }

  private getCountryData(serverData: any): void {
    this.countriesData = serverData;
  }
}
