import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Account } from '../../../../../webModel/Interface/account.interface';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-modal-update-account',
    templateUrl: './modal-update-account.component.html',
    styleUrls: ['./modal-update-account.component.scss']
})
/** modal-update-account component*/
export class ModalUpdateAccountComponent {

  form = this.fb.group({
    accountName: null,
    password: null,
    server: null,
    group: null,
    character: null
  });
    /** modal-update-account ctor */
  constructor(private translateService: TranslateService, private dialogRef: MatDialogRef<ModalUpdateAccountComponent>, @Inject(MAT_DIALOG_DATA) private contactId: Account['accountName'], private fb: FormBuilder) {

    }
}
