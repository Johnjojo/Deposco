import { Component } from '@angular/core';
import { ChartModule} from "angular-highcharts";
import {HttpClient} from "@angular/common/http";
import {createTopSaleChart, TopSale} from "./topSaleProductChart";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-top-sale-products',
  standalone: true,
  imports: [
    ChartModule,
    FormsModule
  ],
  templateUrl: './top-sale-products.component.html',
  styleUrl: './top-sale-products.component.scss'
})

export class TopSaleProductsComponent {
  constructor(private http:HttpClient) { }
  public chart : any;
  limit: number = 5;
  loadChart!: Function;
  ngOnInit(): void {
    this.loadChart = () => {
      console.log(this.limit);
      this.http.get<TopSale[]>("http://localhost:8080/topSale?limit=" + this.limit)
        .subscribe(resp => {
          this.chart = createTopSaleChart(resp, this.limit);
        })
    }
    this.loadChart();
  }
}
