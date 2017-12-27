import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../store/products/products.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/index';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.products$ = this.store.select('products').map(products => products.list);
  }
}
