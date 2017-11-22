import { Injectable } from '@angular/core';
import { Permissible } from '../interceptor/interceptor.service';

@Injectable()
export class CurrentPermissionsService implements Permissible {
  public permissions = ['increment']
}
