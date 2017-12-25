import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from './store';
import { Store } from '@ngrx/store';
import * as counterActions from './store/counter/counter.actions';
import 'rxjs/add/operator/map';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public counter$: Observable<number>;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.counter$ = this.store.select('counter').map(counter => counter.value);
  }

  public increment() {
    this.store.dispatch(new counterActions.Increment());
  }

  public decrement() {
    this.store.dispatch(new counterActions.Decrement());
  }
}
