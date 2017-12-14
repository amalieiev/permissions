import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as counterActions from './counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  increment$ = this.actions$
    .ofType(counterActions.INCREMENT)
    .map(() => {
      return new counterActions.IncrementSuccess();
    });

  @Effect()
  decrement$ = this.actions$
    .ofType(counterActions.DECREMENT)
    .map(() => {
      return new counterActions.DecrementSuccess();
    });
}
