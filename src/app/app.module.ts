import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { effects, reducer } from './app.store';
import { EffectsModule } from '@ngrx/effects';
import { CurrentPermissionsService } from './services/current-permissions.service';
import { ActionToPermissionsMapService } from './services/action-to-permissions-map.service';
import { InterceptorModule } from './interceptor/interceptor.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot(effects),
    InterceptorModule.forRoot(CurrentPermissionsService, ActionToPermissionsMapService)
  ],
  providers: [
    CurrentPermissionsService,
    ActionToPermissionsMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
