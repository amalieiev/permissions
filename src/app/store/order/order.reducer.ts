import { Action } from '@ngrx/store';
import * as orderActions from './order.actions';

export interface Order {
  id: string;
}

export interface OrderState {
  activeOrder: Order;
}

const initialState: OrderState = {
  activeOrder: null
};

export function orderReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
