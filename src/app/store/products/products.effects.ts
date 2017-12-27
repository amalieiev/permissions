import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as productsActions from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions) {}
}
