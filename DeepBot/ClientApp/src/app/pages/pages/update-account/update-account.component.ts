import { Component, OnInit } from '@angular/core';
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
import { Account } from '../../../../webModel/Interface/account.interface';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../auth/reducers';
import { ModalUpdateAccountComponent } from './modal-update-account/modal-update-account.component';

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

  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );

  menuOpen = false;

  activeCategory: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business' = 'all';
  tableData = [
    {
      accountName: 'Nom de compte',
      characterName: 'pseudo perso',
      creationDate: new Date(),
      imageSrc: 'assets/img/classe/m_cra.png',
      isLeader: true
    },
    {
      accountName: 'Nom de compte2',
      characterName: 'pseudo perso2',
      creationDate: new Date(),
      imageSrc: 'assets/img/classe/m_enutrof.png',
      isLeader: true
    },
    {
      accountName: 'Nom de compte3',
      characterName: 'pseudo perso3',
      creationDate: new Date(),
      imageSrc: 'assets/img/classe/f_iop.png',
      isLeader: false
    },
  ];

  columns: TableColumn<Account>[] = [
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
      cssClasses: ['text-secondary']
    },
    {
      label: this.translateService.instant('GLOBAL.CREATIONDATE'),
      property: 'creationDate',
      type: 'text',
      cssClasses: ['text-secondary']
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

  constructor(private dialog: MatDialog, private translateService: TranslateService, private store: Store<fromAuth.State>) { }


  ngOnInit() {
  }

  openAccount(accountName?: Account['accountName']) {



    this.dialog.open(ModalUpdateAccountComponent, {
      data: accountName || null,
      width: '600px'
    });
  }



  setData(data: Account[]) {
    this.tableData = data;
    this.menuOpen = false;
  }

  openMenu() {
    this.menuOpen = true;
  }
}
