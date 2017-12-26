import { Location } from '@angular/common';
import { Compiler, Injectable, Injector, NgModule, NgModuleFactoryLoader, Type } from '@angular/core';
import { Action, ActionsSubject, ReducerManager, StateObservable, Store } from '@ngrx/store';
import { ChildrenOutletContexts, NavigationExtras, Router, Routes, UrlSerializer } from '@angular/router';

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
        // {provide: Router, useClass: RouterInterceptor},
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

@Injectable()
export class RouterInterceptor extends Router {
  constructor(rootComponentType: Type<any> | null, urlSerializer: UrlSerializer, rootContexts: ChildrenOutletContexts, location: Location, injector: Injector, loader: NgModuleFactoryLoader, compiler: Compiler, config: Routes) {
    super(rootComponentType, urlSerializer, rootContexts, location, injector, loader, compiler, config);
  }

  navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
    return super.navigate(commands, extras);
  }
}
