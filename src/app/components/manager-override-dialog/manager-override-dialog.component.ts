import { Component, Inject } from '@angular/core';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'manager-override-dialog',
  templateUrl: './manager-override-dialog.component.html'
})
export class ManagerOverrideDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              public store: Store<AppState>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onAuthorize() {
    this.dialogRef.close();
    this.data.confirm(this.data.action);
    this.store.dispatch(this.data.action);
  }
}
