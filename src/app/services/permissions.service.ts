import { Injectable } from '@angular/core';
import { CanDoAction } from '../modules/interceptor.module';
import { Action } from '@ngrx/store';
import { every, find } from 'lodash';

import * as orderActions from '../store/order/order.actions';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class PermissionsService implements CanDoAction, CanActivate {
  constructor(private dialog: MatDialog) {
  }
  public confirmedActions: Action[] = [];
  /**
   * Current user permissions.
   */
  public permissions = ['add_item', 'create_order'];

  /**
   * Action to permission map.
   */
  public actionsPermissionsMap = {
    [orderActions.CREATE_ORDER]: ['create_order'],
    [orderActions.ADD_ITEM]: ['add_item']
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
            confirm: this.confirm.bind(this),
            reject() {}
          }
        });
      }
    }

    return canDoAction;
  }

  public canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.dialog.open(ConfirmationDialogComponent, {
        data: {
          action: {type: state.url},
          confirm(){
            resolve(true)
          },
          reject() {
            resolve(false);
          }
        }
      });
    });
  }

  /**
   * Add action to allowed actions stack
   */
  public confirm(action) {
    this.confirmedActions.push(action);
  }
}
