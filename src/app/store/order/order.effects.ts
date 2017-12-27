import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as orderActions from './order.actions';

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions) {}
}
