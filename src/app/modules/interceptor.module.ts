import { Injectable, NgModule, Type } from '@angular/core';
import { Action, ActionsSubject, ReducerManager, StateObservable, Store } from '@ngrx/store';

export interface CanDoAction {
  canDoAction(action: Action) : boolean;
}

@NgModule()
export class InterceptorModule {
  static forRoot(permissible: Type<CanDoAction>) {
    return {
      ngModule: InterceptorModule,
      providers: [
        {provide: Store, useClass: StoreInterceptor},
        {provide: PermissionsProvider, useClass: permissible},
      ]
    }
  }
}

@Injectable()
export class PermissionsProvider implements CanDoAction {
  canDoAction(action: Action): boolean {
    return true;
  }
}

@Injectable()
export class StoreInterceptor<T> extends Store<T> {
  constructor(state$: StateObservable, actionsObserver: ActionsSubject, reducerManager: ReducerManager, private permissionsProvider: PermissionsProvider) {
    super(state$, actionsObserver, reducerManager);
  }

  dispatch(action) {
    const canDoAction = this.permissionsProvider.canDoAction(action);

    if (canDoAction) {
      super.dispatch(action);
    }
  }
}
