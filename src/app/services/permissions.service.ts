import { Injectable } from '@angular/core';
import { CanDoAction } from '../modules/interceptor.module';
import { Action } from '@ngrx/store';
import { every, find } from 'lodash';

import * as counterActions from '../store/counter/counter.actions';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';

@Injectable()
export class PermissionsService implements CanDoAction {
  constructor(private dialog: MatDialog) {
  }
  public confirmedActions: Action[] = [];
  /**
   * Current user permissions.
   */
  public permissions = ['increment'];

  /**
   * Action to permission map.
   */
  public actionsPermissionsMap = {
    [counterActions.INCREMENT]: ['increment'],
    [counterActions.DECREMENT]: ['decrement']
  };

  public canDoAction(action: Action): boolean {
    const requiredPermissions = this.actionsPermissionsMap[action.type];
    const availablePermissions = this.permissions;

    const canDoAction = every(requiredPermissions, requiredPermission => {
      return find(availablePermissions, availablePermission => {
        return requiredPermission === availablePermission;
      });
    });

    if (!canDoAction) {
      const confirmedAction = this.confirmedActions.find(confirmedAction => {
        return action.type === confirmedAction.type;
      });

      if(confirmedAction) {
        this.confirmedActions.splice(this.confirmedActions.indexOf(confirmedAction), 1);
        return true;
      } else {
        this.dialog.open(ConfirmationDialogComponent, {
          data: {
            action,
            confirm: this.confirm.bind(this)
          }
        });
      }
    }

    return canDoAction;
  }

  /**
   * Add action to allowed actions stack
   */
  public confirm(action) {
    this.confirmedActions.push(action);
  }
}
