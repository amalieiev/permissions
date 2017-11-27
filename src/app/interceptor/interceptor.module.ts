import { Injectable, NgModule, Type } from '@angular/core';
import { Action, ActionsSubject, ReducerManager, StateObservable, Store } from '@ngrx/store';

export interface Permissible {
  canDoAction(action: Action) : boolean;
}

@NgModule()
export class InterceptorModule {
  static forRoot(permissible: Type<Permissible>) {
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
export class PermissionsProvider implements Permissible {
  canDoAction(action: Action): boolean {
    return true;
  }
}

@Injectable()
export class Interceptor<T> extends Store<T> {
  constructor(state$: StateObservable, actionsObserver: ActionsSubject, reducerManager: ReducerManager, private permissionsProvider: PermissionsProvider) {
    super(state$, actionsObserver, reducerManager);
  }

  dispatch(action) {
    if (this.permissionsProvider.canDoAction(action)) {
      super.dispatch(action);
    }
  }
}
