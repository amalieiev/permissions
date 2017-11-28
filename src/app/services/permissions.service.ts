import { Injectable } from '@angular/core';
import { CanDoAction } from '../interceptor/interceptor.module';
import * as counterActions from '../counter/counter.actions';
import { Action } from '@ngrx/store';
import _ from 'underscore';

@Injectable()
export class PermissionsService implements CanDoAction {
  /**
   * Current user permissions.
   */
  public permissions = ['increment'];

  /**
   * Action to permission map.
   */
  public permissionsMap = {
    [counterActions.INCREMENT]: ['increment'],
    [counterActions.DECREMENT]: ['decrement']
  };

  public canDoAction(action: Action): boolean {
    const requires = this.permissionsMap[action.type];
    const has = this.permissions;

    return _.every(requires, req => _.contains(has, req))
  }
}
