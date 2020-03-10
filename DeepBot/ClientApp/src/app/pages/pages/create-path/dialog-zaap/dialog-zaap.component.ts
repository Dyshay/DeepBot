import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ListZaap } from '../../../../../webModel/Utility/PathCreator/Zaap';

@Component({
  selector: 'app-dialog-zaap',
  templateUrl: './dialog-zaap.component.html',
  styleUrls: ['./dialog-zaap.component.scss']
})
/** dialog-zaap component*/
export class DialogZaapComponent {
  zaapSelected :Zaap

  /** dialog-zaap ctor */
  constructor(public dialogRef: MatDialogRef<DialogZaapComponent>) {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  Zaaps = ListZaap.Zaaps;
}



interface Zaap {
  destinationName: string;
  destination: string;
  id: number;
  cellId: number;
}
