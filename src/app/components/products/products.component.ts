import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../store/products/products.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/index';
import * as orderActions from '../../store/order/order.actions';
import { Order } from '../../store/order/order.reducer';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<Product[]>;
  public activeOrder: Order;
  public get total(): number {
    if (this.activeOrder) {
      return this.activeOrder.items.reduce((total, product) => total + product.price, 0);
    } else return 0;
  };

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.products$ = this.store.select('products').map(productsState => productsState.list);

    this.store.select('order').subscribe(orderState => {
      this.activeOrder = orderState.activeOrder;
    });
  }

  public addItem(product) {
    if (this.activeOrder) {
      this.store.dispatch(new orderActions.AddItem(product));
    } else {
      this.store.dispatch(new orderActions.CreateOrder());
      this.store.dispatch(new orderActions.AddItem(product));
    }
  }
}
