import { NgModule, Type } from '@angular/core';
import {
  ActionToPermissionMap,
  InterceptorService,
  Permissible,
  PermissionsMapProvider,
  PermissionsProvider
} from './interceptor.service';
import { Store } from '@ngrx/store';

@NgModule()
export class InterceptorModule {
  static forRoot(permissible: Type<Permissible>, actionToPermissionMap: Type<ActionToPermissionMap>) {
    return {
      ngModule: InterceptorModule,
      providers: [
        {provide: Store, useClass: InterceptorService},
        {provide: PermissionsProvider, useClass: permissible},
        {provide: PermissionsMapProvider, useClass: actionToPermissionMap}
      ]
    }
  }
}

