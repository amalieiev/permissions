import { Injectable, NgModule, Type } from '@angular/core';
import { Action, ActionsSubject, ReducerManager, StateObservable, Store } from '@ngrx/store';

export interface CanDoAction {
  canDoAction(action: Action) : boolean;
}
export interface CanOverrideAction {
  canOverrideAction(action: Action) : Action;
}

@NgModule()
export class InterceptorModule {
  static forRoot(permissible: Type<CanDoAction>) {
    return {
      ngModule: InterceptorModule,
      providers: [
        {provide: Store, useClass: Interceptor},
        {provide: PermissionsProvider, useClass: permissible},
      ]
    }
  }
}

@Injectable()
export class PermissionsProvider implements CanDoAction, CanOverrideAction {
  canDoAction(action: Action): boolean {
    return true;
  }

  canOverrideAction(action: Action): Action {
    return action;
  }
}

@Injectable()
export class Interceptor<T> extends Store<T> {
  constructor(state$: StateObservable, actionsObserver: ActionsSubject, reducerManager: ReducerManager, private permissionsProvider: PermissionsProvider) {
    super(state$, actionsObserver, reducerManager);
  }

  dispatch(action) {
    const canDoAction = this.permissionsProvider.canDoAction(action);
    const overrideAction = this.permissionsProvider.canOverrideAction(action);

    if (canDoAction) {
      console.log(action);
      super.dispatch(action);
    } else if (overrideAction) {
      console.log(overrideAction);
      super.dispatch(overrideAction);
    }
  }
}
