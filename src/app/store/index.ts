import { CounterState, counterReducer } from './counter/counter.reducer';
import { SystemState, systemReducer } from './system/system.reducer';

import { CounterEffects } from './counter/counter.effects';

export interface AppState {
  counter: CounterState,
  system: SystemState
}

export const reducer = {
  counter: counterReducer,
  system: systemReducer
};

export const effects = [
  CounterEffects
];
