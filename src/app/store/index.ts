import { ProductsState, productsReducer } from './products/products.reducer';
import { OrderState, orderReducer } from './order/order.reducer';

import { ProductsEffects } from './products/products.effects';
import { OrderEffects } from './order/order.effects';

export interface AppState {
  products: ProductsState,
  order: OrderState
}

export const reducer = {
  products: productsReducer,
  order: orderReducer
};

export const effects = [
  ProductsEffects,
  OrderEffects
];
