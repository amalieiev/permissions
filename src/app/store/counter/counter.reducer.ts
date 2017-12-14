import { Action } from '@ngrx/store';
import * as counterActions from './counter.actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case counterActions.INCREMENT_SUCCESS:
      return {...state, value: state.value + 1};
    case counterActions.DECREMENT_SUCCESS:
      return {...state, value: state.value - 1};
    default:
      return state;
  }
}
