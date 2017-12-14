import { Action } from '@ngrx/store';

export const MANAGER_OVERRIDE = 'MANAGER_OVERRIDE';
export const MANAGER_OVERRIDE_CANCEL = 'MANAGER_OVERRIDE_CANCEL';

export class ManagerOverride implements Action {
  readonly type = MANAGER_OVERRIDE;
  constructor(public payload: Action) {}
}
export class ManagerOverrideCancel implements Action {
  readonly type = MANAGER_OVERRIDE_CANCEL;
}
