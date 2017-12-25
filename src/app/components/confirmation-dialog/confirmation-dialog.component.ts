import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ManagerOverrideDialogComponent } from '../manager-override-dialog/manager-override-dialog.component';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent {
  constructor(public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  onYesClick() {
    this.dialog.open(ManagerOverrideDialogComponent, {
      data: this.data
    });
  }
}
