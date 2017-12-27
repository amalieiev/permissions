import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as orderActions from './order.actions';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions) {}
}
