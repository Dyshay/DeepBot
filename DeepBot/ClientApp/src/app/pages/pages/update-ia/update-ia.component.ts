import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { debounceTime } from 'rxjs/operators';
import { IaInterface } from '../../../../webModel/Interface/ia.interface';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { Store, select } from '@ngrx/store';
import * as fromia from 'src/app/app-reducers/ia/reducers';
import { IA, Classe, TypeIA } from '../../../../webModel/IA';
import { ModalUpdateIaComponent } from './modal-update-ia/modal-update-ia.component';

@Component({
    selector: 'app-update-ia',
    templateUrl: './update-ia.component.html',
  styleUrls: ['./update-ia.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
/** update-ia component*/
export class UpdateIaComponent implements OnInit {


  searchCtrl = new FormControl();
  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );

  menuOpen = false;
  icStar = icStar;
  icSearch = icSearch;
  icContacts = icContacts;
  icMenu = icMenu;
  tableData = [];

  scrWidth: number; /* largeur écran */
  srcHeight: number; /* hauteur écran */
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrWidth = window.innerWidth;
    this.srcHeight = window.innerHeight;
  }


  columns: TableColumn<IaInterface>[] = [
    {
      label: this.translateService.instant('CREATEIA.IANAME'),
      property: 'name',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('CREATEIA.CLASSEIA'),
      property: 'class',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('CREATEIA.TYPEIA'),
      property: 'type',
      type: 'text',
      cssClasses: ['font-medium']
    }
  ];


    /** update-ia ctor */
  constructor(private dialog: MatDialog, private translateService: TranslateService, private storeIa: Store<fromia.State>) {

  }
  ngOnInit() {
    this.storeIa.pipe(select(fromia.getAllIa)).subscribe(
      (result: IA[]) => {
        for (var i = 0; i < result.length; i++) {
          this.tableData.push({
            name: result[i].name,
            class:  Classe[result[i].classe],
            type: TypeIA[result[i].type],
            key:result[i].key
          })
        }
      }
    );
  }


  openIa(key?: IaInterface['key']) {
    this.getScreenSize();
    this.dialog.open(ModalUpdateIaComponent, {
      data: key || null,
      width: '' + (this.scrWidth - (this.scrWidth / 10)) + 'px',
      height: '' + (this.srcHeight - (this.srcHeight / 15)) + 'px'
    }).afterClosed().subscribe(
      (data: IA) => {
        if (data != null) {
          var index = this.tableData.findIndex(o => o.key == data.key);
          this.tableData[index] = data;
        }
      }

    );
  }

  setData(data: IaInterface[]) {
    this.tableData = data;
    this.menuOpen = false;
  }

  openMenu() {
    this.menuOpen = true;
  }
}
