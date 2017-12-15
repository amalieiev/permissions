import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManagerOverrideComponent } from './components/manager-override/manager-override.component';

import { StoreModule } from '@ngrx/store';
import { effects, reducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { PermissionsService } from './services/permissions.service';
import { InterceptorModule } from './modules/interceptor.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ManagerOverrideComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot(effects),
    InterceptorModule.forRoot(PermissionsService),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    PermissionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
