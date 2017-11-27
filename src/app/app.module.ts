import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { effects, reducer } from './app.store';
import { EffectsModule } from '@ngrx/effects';
import { PermissionsService } from './services/permissions.service';
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
    InterceptorModule.forRoot(PermissionsService)
  ],
  providers: [
    PermissionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
