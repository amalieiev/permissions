import { Routes } from '@angular/router';
import { ProductsComponent } from '../components/products/products.component';
import { PermissionsService } from '../services/permissions.service';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent, canActivate: [PermissionsService] }
];
