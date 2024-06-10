import { Component } from '@angular/core';
import { ChartModule} from "angular-highcharts";
import {HttpClient} from "@angular/common/http";
import {createChart, MonthSale} from "./MonthSalesChart";


@Component({
  selector: 'app-sales-by-month',
  standalone: true,
  imports: [
    ChartModule
  ],
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.scss'

})

export class SalesByMonthComponent {

  constructor(private http:HttpClient) { }
  public chart : any;
  ngOnInit(): void {
    this.http.get<MonthSale[]>("http://localhost:8080/monthlySale")
      .subscribe(resp =>{
      this.chart = createChart(resp);
    })

  }
}
