import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as systemActions from './system.actions';

@Injectable()
export class SystemEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  managerOverrideSuccess$ = this.actions$
    .ofType(systemActions.MANAGER_OVERRIDE_SUCCESS)
    .map((action) => {
      return action['payload'];
    });
}
