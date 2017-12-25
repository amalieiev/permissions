import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

import { StoreModule } from '@ngrx/store';
import { effects, reducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { PermissionsService } from './services/permissions.service';
import { InterceptorModule } from './modules/interceptor.module';
import { MaterialModule } from './modules/material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ManagerOverrideDialogComponent } from './components/manager-override-dialog/manager-override-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    ManagerOverrideDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    ManagerOverrideDialogComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot(effects),
    InterceptorModule.forRoot(PermissionsService),
    StoreDevtoolsModule.instrument(),
    MaterialModule
  ],
  providers: [
    PermissionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
