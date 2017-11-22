import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS';
export const DECREMENT = 'DECREMENT';
export const DECREMENT_SUCCESS = 'DECREMENT_SUCCESS';

export class Increment implements Action {
  readonly type = INCREMENT;
}
export class IncrementSuccess implements Action {
  readonly type = INCREMENT_SUCCESS;
}
export class Decrement implements Action {
  readonly type = DECREMENT;
}
export class DecrementSuccess implements Action {
  readonly type = DECREMENT_SUCCESS;
}
