import { Component, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AccountInterface } from '../../../../../webModel/Interface/account.interface';
import { FormBuilder } from '@angular/forms';
import { Account } from '../../../../../webModel/Account';
import { Store, select } from '@ngrx/store';
import * as fromwebUser from 'src/app/app-reducers/webUser/reducers';
import * as fromGroup from 'src/app/app-reducers/group/reducers';
import * as fromAccount from 'src/app/app-reducers/account/reducers';
import { User } from '../../../../../webModel/User';
import { Character } from '../../../../../webModel/Character';
import { Group } from '../../../../../webModel/Group';
import icPerson from '@iconify/icons-ic/person';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import icPaswword from '@iconify/icons-ic/baseline-keyboard-hide';
import icServer from '@iconify/icons-ic/baseline-cloud-upload';
import icClose from '@iconify/icons-ic/close'
import { ToastrService } from 'ngx-toastr';
import { AccountActions } from 'src/app/app-reducers/account/actions';
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
  icPerson = icPerson;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icPaswword = icPaswword;
  icClose = icClose;
  icServer = icServer;
  inputType = 'password';
  visible = false;



  serverList: { id: number, name: string }[] = [
    { id: 609, name: 'Bilby' },
    { id: 601, name: 'Eratz' },
    { id: 602, name: 'Henual' },
    { id: 604, name: 'Arty' },
    { id: 605, name: 'Algathe' },
    { id: 606, name: 'Hogmeiser' },
    { id: 607, name: 'Droupik' },
    { id: 608, name: 'Ayuto' },
    { id: 610, name: 'Clustus' },
    { id: 611, name: 'Issering' },
  ]

    /** modal-update-account ctor */
  constructor(private translateService: TranslateService,
    private storeGroup: Store<fromGroup.State>,
    private storeUser: Store<fromwebUser.State>,
    private storeAccount: Store<fromAccount.State>,
    private dialogRef: MatDialogRef<ModalUpdateAccountComponent>,
    private toastr: ToastrService,
    private cd: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private accountName: AccountInterface['accountName'], private fb: FormBuilder) {
     
    }
  ngOnInit() {
    this.storeGroup.pipe(select(fromGroup.getAllGroups)).subscribe(
      (result) => {
        this.groups = result;
      }
    );
 
    this.storeUser.pipe(select(fromwebUser.getUser)).subscribe(
      (result: User) => {
        this.account = result.accounts.find(o => o.accountName == this.accountName);
        this.charaters = this.account.characters;
        this.form = this.fb.group({
          accountName: [{ value: this.account.accountName, disabled: true }],
          password: this.account.password,
          server: this.account.serverId,
          group: this.account.currentCharacter.fk_Group,
          character: this.account.currentCharacter.key
        });
      }
    );
  }


  updateAccount() {
    const clonedeep = require('lodash.clonedeep');

    this.storeUser.pipe(select(fromwebUser.getUser)).subscribe(
      (result: User) => {
        if (this.ValidateCredential()) {

          let account = clonedeep(this.account);
          account.accountName = this.form.controls["accountName"].value;
          this.account.password = this.form.controls["password"].value;
          this.account.serverId = this.form.controls["server"].value;
          if (this.account.currentCharacter.key != this.form.controls["character"].value) {
            if (this.groups.find(o => o.key == this.account.currentCharacter.fk_Group) != null) {
              var index = this.groups.find(o => o.key == this.account.currentCharacter.fk_Group).fk_Followers.findIndex(o => o == this.account.currentCharacter.key)
              this.groups.find(o => o.key == this.account.currentCharacter.fk_Group).fk_Followers.splice(index, 1)
            }


            this.account.currentCharacter.fk_Group == null;
            this.account.currentCharacter = result.accounts.find(o => o.accountName == this.account.accountName).characters.find(o => o.key == this.form.controls["character"].value);
          }
          this.account.currentCharacter.fk_Group = this.form.controls["group"].value;
          let accountToUpdate = this.account
          this.storeAccount.dispatch(AccountActions.updateAccount({ accountToUpdate }));
          this.dialogRef.close(this.account);
        }
        else {
          this.toastr.error('Vous ne pouvez pas modifier le personnage actuel, celui ci est leader d"un  groupe', 'Erreur');
        }

      
      });
  }
  ValidateCredential() {
    if (this.account.currentCharacter.key != this.form.controls["character"].value || this.account.currentCharacter.fk_Group != this.form.controls["group"].value) {
      for (var i = 0; i < this.groups.length; i++) {
        if (this.groups[i].fk_Leader == this.form.controls["character"].value)
          return false;
      }
    }
    return true;

  }

  DeleteAccount() {
    if (this.ValidateCredential()) {
      let accountKeyToDelete = this.account.key;
      this.storeAccount.dispatch(AccountActions.deleteAccount({ accountKeyToDelete }));
      this.dialogRef.close(this.account);
    }
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
