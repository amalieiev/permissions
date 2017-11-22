import { Injectable } from '@angular/core';
import * as counterActions from '../counter/counter.actions';
import { ActionToPermissionMap } from '../interceptor/interceptor.service';

@Injectable()
export class ActionToPermissionsMapService implements ActionToPermissionMap {
  public permissionsMap = {
    [counterActions.INCREMENT]: ['increment'],
    [counterActions.DECREMENT]: ['decrement']
  }
}
