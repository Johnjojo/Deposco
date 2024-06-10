import { Component } from '@angular/core';
import {TopWidgetsComponent} from "../top-widgets/top-widgets.component";
import {SalesByMonthComponent} from "../sales-by-month/sales-by-month.component";
import {TopSaleProductsComponent} from "../top-sale-products/top-sale-products.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TopWidgetsComponent,
    SalesByMonthComponent,
    TopSaleProductsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
