import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

import { StoreModule } from '@ngrx/store';
import { effects, reducer } from './store';
import { routes } from './routes';
import { EffectsModule } from '@ngrx/effects';
import { PermissionsService } from './services/permissions.service';
import { InterceptorModule } from './modules/interceptor.module';
import { MaterialModule } from './modules/material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ManagerOverrideDialogComponent } from './components/manager-override-dialog/manager-override-dialog.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConfirmationDialogComponent,
    ManagerOverrideDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    ManagerOverrideDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot(effects),
    RouterModule.forRoot(routes),
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
