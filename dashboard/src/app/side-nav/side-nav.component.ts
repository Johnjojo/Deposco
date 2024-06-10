import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {
  faBox,
  faChartBar,
  faContactBook,
  faDashboard, faHand,
  faLocation,
  faMoneyBill,
  faShop
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  protected readonly faDashboard = faDashboard;
  protected readonly faLocation = faLocation;
  protected readonly faShop = faShop;
  protected readonly faBox = faBox;
  protected readonly faMoneyBill = faMoneyBill;
  protected readonly faChartBar = faChartBar;
  protected readonly faContactBook = faContactBook;
  protected readonly faHand = faHand;
}
