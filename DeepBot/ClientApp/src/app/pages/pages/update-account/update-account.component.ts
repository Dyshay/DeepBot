import { Component, OnInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { Contact } from '../../apps/contacts/interfaces/contact.interface';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import icMenu from '@iconify/icons-ic/twotone-menu';

import { MatDialog } from '@angular/material';
import { ContactsEditComponent } from '../../apps/contacts/components/contacts-edit/contacts-edit.component';
import { TranslateService } from '@ngx-translate/core';
import { AccountInterface } from '../../../../webModel/Interface/account.interface';
import { Store, select } from '@ngrx/store';
import * as fromwebUser from 'src/app/app-reducers/webUser/reducers';
import { ModalUpdateAccountComponent } from './modal-update-account/modal-update-account.component';
import { pipe } from 'rxjs';
import { User } from '../../../../webModel/User';
import * as fromgroup from 'src/app/app-reducers/group/reducers';
import * as fromCharacter from 'src/app/app-reducers/character/reducers';
import { Group } from '../../../../webModel/Group';
import { Character } from '../../../../webModel/Character';
import { Account } from '../../../../webModel/Account';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
/** update-account component*/
export class UpdateAccountComponent implements OnInit {

  searchCtrl = new FormControl();
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


  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );

  menuOpen = false;

  tableData = [];

  columns: TableColumn<AccountInterface>[] = [
    {
      label: '',
      property: 'imageSrc',
      type: 'image',
      cssClasses: ['min-w-9']
    },
    {
      label: this.translateService.instant('GLOBAL.ACCOUNTNAME'),
      property: 'accountName',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('GLOBAL.PRINCIPALCHARACTER'),
      property: 'characterName',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('CREATEGROUP.GROUPNAME'),
      property: 'groupName',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('GLOBAL.SERVER'),
      property: 'server',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('GLOBAL.CREATIONDATE'),
      property: 'creationDate',
      type: 'date',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('GLOBAL.ISLEADER'),
      property: 'isLeader',
      type: 'button',
      cssClasses: ['text-secondary']
    }
  ];

  icStar = icStar;
  icSearch = icSearch;
  icContacts = icContacts;
  icMenu = icMenu;


  constructor(private dialog: MatDialog, private translateService: TranslateService, private storeUser: Store<fromwebUser.State>, private storeGroup: Store<fromgroup.State>) { }


  ngOnInit() {
    this.storeGroup.pipe(select(fromgroup.getAllGroups)).subscribe(
      (result0: Group[]) => {
        console.log(result0);
        this.storeUser.pipe(select(fromwebUser.getUser)).subscribe(
          (result: User) => {
            for (var i = 0; i < result.accounts.length; i++) {
              if (result0.findIndex(o => o.key == result.accounts[i].currentCharacter.fk_Group) != -1) {
                var isleader = false;
                if (result0.findIndex(o => o.fk_Leader == result.accounts[i].currentCharacter.key) != -1)
                  isleader = true;
                this.tableData.push(
                  {
                    accountName: result.accounts[i].accountName,
                    characterName: result.accounts[i].currentCharacter.name,
                    creationDate: result.accounts[i].creationDate,
                    server: this.serverList.find(o=>o.id==  result.accounts[i].serverId).name,
                    groupName: result0.find(o => o.key == result.accounts[i].currentCharacter.fk_Group).name,
                    imageSrc: 'assets/img/classe/m_cra.png',
                    isLeader: isleader
                  }
                )
              }
              else
                this.tableData.push(
                  {
                    accountName: result.accounts[i].accountName,
                    characterName: result.accounts[i].currentCharacter.name,
                    creationDate: result.accounts[i].creationDate,
                    server: this.serverList.find(o => o.id == result.accounts[i].serverId).name,
                    groupName: 'Aucun groupe',
                    imageSrc: 'assets/img/classe/m_cra.png',
                    isLeader: false
                  }
                )
            }
          }
        );
      }
    );


  }

  openAccount(accountName?: AccountInterface['accountName']) {
    this.dialog.open(ModalUpdateAccountComponent, {
      data: accountName || null,
      width: '600px'
    }).afterClosed().subscribe(
      (data: Account) => {
        if (data != null) {
          var index = this.tableData.findIndex(o => o.key == data.key);
          this.tableData[index] = data;
        }

      }

    );       
  }

  setData(data: Account[]) {
    this.tableData = data;
    this.menuOpen = false;
  }

  openMenu() {
    this.menuOpen = true;
  }
}
