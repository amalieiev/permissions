import { Component } from '@angular/core';
import { PermissionsService } from './services/permissions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  permissions: string[];

  constructor(permissionsService: PermissionsService) {
    this.permissions = permissionsService.permissions;
  }
}
