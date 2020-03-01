import { Component } from '@angular/core';
import { DialogZaapComponent } from '../dialog-zaap/dialog-zaap.component';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-dialog-use-item',
    templateUrl: './dialog-use-item.component.html',
    styleUrls: ['./dialog-use-item.component.scss']
})
/** dialog-use-item component*/
export class DialogUseItemComponent {
    /** dialog-use-item ctor */
    constructor(public dialogRef: MatDialogRef<DialogZaapComponent>) {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  idItem :number;
}
