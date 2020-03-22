import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConditionalAction, OperatorType, ConditionalType } from '../../../../../webModel/IA';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-dialog-add-condition',
    templateUrl: './dialog-add-condition.component.html',
    styleUrls: ['./dialog-add-condition.component.scss']
})
/** dialog-add-condition component*/
export class DialogAddConditionComponent {
  conditiontoAdd: ConditionalAction = new ConditionalAction
  operator = OperatorType;
  conditionalType = ConditionalType;
    /** dialog-add-condition ctor */
  constructor(public dialogRef: MatDialogRef<DialogAddConditionComponent>, private translateService: TranslateService, @Inject(MAT_DIALOG_DATA) public data: ConditionalAction) {
    if (data != null)
      this.conditiontoAdd = data;
  }

  getTranslation(value) {
    return this.translateService.instant('CREATEIA.' + value);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
