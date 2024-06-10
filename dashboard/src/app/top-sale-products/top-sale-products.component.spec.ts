import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TopSaleProductsComponent} from "./top-sale-products.component";


describe('TopSaleProductsComponent', () => {
  let component: TopSaleProductsComponent;
  let fixture: ComponentFixture<TopSaleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSaleProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSaleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
