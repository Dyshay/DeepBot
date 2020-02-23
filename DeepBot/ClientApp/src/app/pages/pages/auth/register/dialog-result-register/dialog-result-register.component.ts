import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-dialog-result-register',
    templateUrl: './dialog-result-register.component.html',
    styleUrls: ['./dialog-result-register.component.scss']
})
/** dialog-result-register component*/
export class DialogResultRegisterComponent implements OnInit {
  message: string;
  type: string;
    /** dialog-result-register ctor */
  constructor(public dialogRef: MatDialogRef<DialogResultRegisterComponent>, @Inject(MAT_DIALOG_DATA) public data: string, private translateService: TranslateService) {
    console.log(data);
    if (data === "AlreadyCreated") {
      this.type = this.translateService.instant('REGISTER.TYPEFAILED');
      this.message = this.translateService.instant('REGISTER.MESSAGEFAILED');
    }
    else if (data === "MailSent") {
      this.type = this.translateService.instant('REGISTER.TYPESUCCES');
      this.message = this.translateService.instant('REGISTER.MESSAGESUCCES');
    }
    else if (data === "MailFailed") {
      this.type = this.translateService.instant('REGISTER.TYPEFAILED');
      this.message = this.translateService.instant('REGISTER.MESSAGEMAILFAILED');
    }
    else if (data === "RegisterError") {
      this.type = this.translateService.instant('REGISTER.TYPEFAILED');
      this.message = this.translateService.instant('REGISTER.MESSAGEEERROR');
    }
    else if (data == "succes") {
      this.type = this.translateService.instant('REGISTER.TYPESUCESSMAIL');
      this.message = this.translateService.instant('REGISTER.MESSAGESUCCESMAIL');
    }
  }

  ngOnInit() {

  }
  Close(): void {
    this.dialogRef.close();
  }
}
