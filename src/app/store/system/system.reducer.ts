import { Action } from '@ngrx/store';
import * as systemActions from './system.actions';

export interface SystemState {
  override: {
    show: boolean,
    action: Action
  }
}

const initialState: SystemState = {
  override: {
    show: false,
    action: null
  }
};

export function systemReducer(state = initialState, action: Action) {
  switch (action.type) {
    case systemActions.MANAGER_OVERRIDE:
      return {
        ...state,
        override: {
          ...state.override,
          show: true,
          action: action['payload']
        }
      };
    case systemActions.MANAGER_OVERRIDE_CANCEL:
      return {
        ...state,
        override: {
          ...state.override,
          show: false,
          action: null
        }
      };
    case systemActions.MANAGER_OVERRIDE_SUCCESS:
      return {
        ...state,
        override: {
          ...state.override,
          show: false,
          action: null
        }
      };
    default:
      return state;
  }
}
