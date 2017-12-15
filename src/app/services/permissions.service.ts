import { Injectable } from '@angular/core';
import { CanDoAction, CanOverrideAction } from '../modules/interceptor.module';
import { Action } from '@ngrx/store';
import _ from 'underscore';

import * as counterActions from '../store/counter/counter.actions';
import * as systemActions from '../store/system/system.actions';

@Injectable()
export class PermissionsService implements CanDoAction, CanOverrideAction {
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
    const canDoAction = _.every(requires, req => _.contains(has, req));

    return canDoAction;
  }

  public canOverrideAction (action: Action): Action {
    return new systemActions.ManagerOverride(action);
  }
}
