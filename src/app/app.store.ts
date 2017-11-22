import { CounterState, counterReducer } from './counter/counter.reducer';
import { CounterEffects } from './counter/counter.effects';

export interface AppState {
  counter: CounterState
}

export const reducer = {
  counter: counterReducer
};

export const effects = [
  CounterEffects
];
