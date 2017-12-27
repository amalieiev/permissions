import { Action } from '@ngrx/store';

export const CREATE_ORDER = 'CREATE_ORDER';
export const ADD_ITEM = 'ADD_ITEM';

export class CreateOrder implements Action {
  readonly type = CREATE_ORDER;
}
export class AddItem implements Action {
  readonly type = ADD_ITEM;
}
