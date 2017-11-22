import { Component } from '@angular/core';
import { CurrentPermissionsService } from './services/current-permissions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  permissions: string[];

  constructor(currentPermissionsService: CurrentPermissionsService) {
    this.permissions = currentPermissionsService.permissions;
  }
}
