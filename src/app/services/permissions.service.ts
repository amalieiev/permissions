import { Injectable } from '@angular/core';
import { CanDoAction, CanOverrideAction } from '../modules/interceptor.module';
import { Action } from '@ngrx/store';
import { every, find } from 'lodash';

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
    const requiredPermissions = this.permissionsMap[action.type];
    const availablePermissions = this.permissions;

    const canDoAction = every(requiredPermissions, requiredPermission => {
      return find(availablePermissions, availablePermission => {
        return requiredPermission === availablePermission;
      });
    });

    return canDoAction;
  }

  public canOverrideAction (action: Action): Action {
    return new systemActions.ManagerOverride(action);
  }
}
