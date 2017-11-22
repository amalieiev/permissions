import { Injectable } from '@angular/core';
import { ActionsSubject, ReducerManager, StateObservable, Store } from '@ngrx/store';
import _ from 'underscore';

export interface Permissible {
  permissions: string[]
}

export interface ActionToPermissionMap {
  permissionsMap: any
}

@Injectable()
export class PermissionsProvider implements Permissible {
  permissions: string[]
}

@Injectable()
export class PermissionsMapProvider implements ActionToPermissionMap {
  permissionsMap: {}
}

@Injectable()
export class InterceptorService<T> extends Store<T> {
  constructor(
    state$: StateObservable,
    actionsObserver: ActionsSubject,
    reducerManager: ReducerManager,
    private permissionsProvider: PermissionsProvider,
    private permissionsMapProvider: PermissionsMapProvider) {
    super(state$, actionsObserver, reducerManager);
  }

  dispatch(action) {
    const requires = this.permissionsMapProvider.permissionsMap[action.type];
    const has = this.permissionsProvider.permissions;

    if (_.every(requires, req => _.contains(has, req))) {
      Store.prototype.dispatch.call(this, action);
    }
  }
}
