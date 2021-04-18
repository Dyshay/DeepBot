import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { TranslateService } from '@ngx-translate/core';
import { GroupInterface } from '../../../../webModel/Interface/group.interface';
import * as fromgroup from 'src/app/app-reducers/group/reducers';
import * as fromcharacter from 'src/app/app-reducers/character/reducers';
import { Store, select } from '@ngrx/store';
import { Character } from '../../../../webModel/Character';
import { Group } from '../../../../webModel/Group';
import { MatDialog } from '@angular/material';
import { ModalUpdateGroupComponent } from './modal-update-group/modal-update-group.component';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import icMenu from '@iconify/icons-ic/twotone-menu';

@Component({
    selector: 'app-update-group',
    templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
/** update-group component*/
export class UpdateGroupComponent implements OnInit {

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


  columns: TableColumn<GroupInterface>[] = [
    {
      label: this.translateService.instant('CREATEGROUP.GROUPNAME'),
      property: 'name',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('GLOBAL.ISLEADER'),
      property: 'leader',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('CREATEGROUP.MEMBER'),
      property: 'followers',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('GLOBAL.LEVEL'),
      property: 'groupLevel',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('UPDATEGROUP.DESCRIPTION'),
      property: 'description',
      type: 'text',
      cssClasses: ['text-secondary']
    }
  ];


    /** update-group ctor */
  constructor(private dialog: MatDialog,private translateService: TranslateService, private storeGroup: Store<fromgroup.State>, private storeCharacter: Store<fromcharacter.State>) {

  }

  ngOnInit() {
    this.storeCharacter.pipe(select(fromcharacter.getAllCurrentCharacters)).subscribe(
      (result: Character[]) => {
        this.storeGroup.pipe(select(fromgroup.getAllGroups)).subscribe(
          (result1: Group[]) => {
            for (var i = 0; i < result1.length; i++) {
              var followers:string = null;
              for (var j = 0; j < result1[i].fk_Followers.length; j++) {
                if (followers == null)
                  followers = result.find(o => o.key == result1[i].fk_Followers[j]).name + ', ';
                else 
                  followers = followers + result.find(o => o.key == result1[i].fk_Followers[j]).name + ', ';
              }
              if (followers != null )
                followers = followers.substring(0, followers.lastIndexOf(','));
              this.tableData.push(
                {
                  name: result1[i].name,
                  leader: result.find(o=>o.key == result1[i].fk_Leader).name,
                  followers: followers,
                  description: result1[i].description,
                  groupLevel:result1[i].groupLevel
                }
              )
            }
          }
        )
      }
    )
  }

  openGroup(name?: GroupInterface['name']) {
    console.log(name);
    this.dialog.open(ModalUpdateGroupComponent, {
      data: name || null,
      width: '800px',
    }).afterClosed().subscribe(
      (data: Group) => {
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
