import * as orderActions from './order.actions';
import { Product } from '../products/products.reducer';

export interface Order {
  id: string;
  items: Product[]
}

export interface OrderState {
  activeOrder: Order;
}

const initialState: OrderState = {
  activeOrder: null
};

export function orderReducer(state = initialState, action: orderActions.All) {
  switch (action.type) {
    case orderActions.CREATE_ORDER:
      return {
        ...state,
        activeOrder: {
          id: Date.now().toString(),
          items: []
        }
      };
    case orderActions.ADD_ITEM:
      return {
        ...state,
        activeOrder: {
          ...state.activeOrder,
          items: [...state.activeOrder.items, action.payload]
        }
      };
    default:
      return state;
  }
}
