import { Component } from '@angular/core';
import { AppState } from '../app.store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as counterActions from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select('counter').map(counter => counter.value);
  }

  increment() {
    this.store.dispatch(new counterActions.Increment())
  }

  decrement() {
    this.store.dispatch(new counterActions.Decrement())
  }
}
