import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AccountInterface } from '../../../../../webModel/Interface/account.interface';
import { FormBuilder } from '@angular/forms';
import { Account } from '../../../../../webModel/Account';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../auth/reducers';
import * as fromBot from '../../bot/reducers';
import { User } from '../../../../../webModel/User';
import { Character } from '../../../../../webModel/Character';
import { Group } from '../../../../../webModel/Group';

@Component({
    selector: 'app-modal-update-account',
    templateUrl: './modal-update-account.component.html',
    styleUrls: ['./modal-update-account.component.scss']
})
/** modal-update-account component*/
export class ModalUpdateAccountComponent implements OnInit {
  account: Account = new Account();
  form;
  charaters: Character[];
  groups: Group[];

    /** modal-update-account ctor */
  constructor(private translateService: TranslateService, private store2: Store<fromBot.State>, private store: Store<fromAuth.State>, private dialogRef: MatDialogRef<ModalUpdateAccountComponent>, @Inject(MAT_DIALOG_DATA) private accountName: AccountInterface['accountName'], private fb: FormBuilder) {
     
    }
  ngOnInit() {
    this.store2.pipe(select(fromBot.getAllGroups)).subscribe(
      (result) => {
        this.groups = result;
      }
    );

    this.store.pipe(select(fromAuth.getUserConnected)).subscribe(
      (result: User) => {
        this.account = result.accounts.find(o => o.accountName == this.accountName);
        this.charaters = this.account.characters;
        this.form = this.fb.group({
          accountName: this.account.accountName,
          password: this.account.password,
          server: this.account.serverId,
          group: this.account.currentCharacter.fk_Group,
          character: this.account.currentCharacter.key
        });
      }
    );
  }
}
