import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from './store';
import { Store } from '@ngrx/store';
import * as counterActions from './store/counter/counter.actions';
import * as systemActions from './store/system/system.actions';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public counter$: Observable<number>;
  public override$: Observable<{}>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.counter$ = this.store.select('counter').map(counter => counter.value);
    this.override$ = this.store.select('system').map(system => system.override);
  }

  public increment() {
    this.store.dispatch(new counterActions.Increment());
  }

  public decrement() {
    this.store.dispatch(new counterActions.Decrement());
  }

  public cancelOverride() {
    this.store.dispatch(new systemActions.ManagerOverrideCancel());
  }
}
