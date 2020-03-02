import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { DialogZaapComponent } from '../dialog-zaap/dialog-zaap.component';
import { MatDialogRef } from '@angular/material';
import icCancel from '@iconify/icons-ic/outline-cancel';

@Component({
    selector: 'app-dialog-cell',
    templateUrl: './dialog-cell.component.html',
    styleUrls: ['./dialog-cell.component.scss']
})
/** dialog-cell component*/
export class DialogCellComponent {
    /** dialog-cell ctor */
  constructor(public dialogRef: MatDialogRef<DialogZaapComponent>) {

  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  cells: Cell[] = [];
  icCancel = icCancel

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.cells.push({ cellId: +value });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(cell: Cell): void {
    const index = this.cells.indexOf(cell);

    if (index >= 0) {
      this.cells.splice(index, 1);
    }
  }
}

export interface Cell {
  cellId: number;
}
