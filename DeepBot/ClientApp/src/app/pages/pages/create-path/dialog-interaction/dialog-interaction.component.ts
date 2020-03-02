import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-dialog-interaction',
    templateUrl: './dialog-interaction.component.html',
    styleUrls: ['./dialog-interaction.component.scss']
})
/** dialog-interaction component*/
export class DialogInteractionComponent {
    /** dialog-interaction ctor */
  constructor(public dialogRef: MatDialogRef<DialogInteractionComponent>) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  data: {
    interactiveObject: number,
    interactiveAction: number
  } = {interactiveAction:0,interactiveObject:0}

}
