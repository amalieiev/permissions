import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../store';
import { Action, Store } from '@ngrx/store';
import * as systemActions from '../../store/system/system.actions';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Component({
  selector: 'manager-override',
  templateUrl: './manager-override.component.html'
})
export class ManagerOverrideComponent implements OnInit {
  public showOverride$: Observable<boolean>;
  public action: Action;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.showOverride$ = this.store.select('system')
      .do(system => this.action = system.override.action)
      .map(system => system.override.show);
  }

  public cancelOverride() {
    this.store.dispatch(new systemActions.ManagerOverrideCancel());
  }

  public submitOverride() {
    this.store.dispatch(new systemActions.ManagerOverrideSuccess(this.action));
  }
}
