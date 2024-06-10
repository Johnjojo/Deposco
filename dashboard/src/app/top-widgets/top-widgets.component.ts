import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faBoxes, faLocation, faMoneyBill, faShop} from "@fortawesome/free-solid-svg-icons";
import {HttpClient} from "@angular/common/http";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [
    FaIconComponent,
    CurrencyPipe
  ],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss'
})
export class TopWidgetsComponent {

  protected readonly faLocation = faLocation;
  protected readonly faShop = faShop;
  protected readonly faBoxes = faBoxes;
  protected readonly faMoneyBill = faMoneyBill;
  constructor(private http:HttpClient) { }
  totalSale!: number;
  ngOnInit(): void {
    console.log();
    this.http.get<number>("http://localhost:8080/totalSale")
      .subscribe(resp =>{
        this.totalSale = resp;
      })

  }
}
