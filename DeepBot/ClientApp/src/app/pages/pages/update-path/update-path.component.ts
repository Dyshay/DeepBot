import { Component, OnInit, HostListener } from '@angular/core';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import * as fromPath from 'src/app/app-reducers/path/reducers';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { PathInterface } from '../../../../webModel/Interface/path';
import { PathMinDisplayed, Path } from '../../../../webModel/Utility/PathCreator/Path';
import { ModalUpdatePathComponent } from './modal-update-path/modal-update-path.component';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
    selector: 'app-update-path',
    templateUrl: './update-path.component.html',
  styleUrls: ['./update-path.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
/** update-path component*/
export class UpdatePathComponent implements OnInit {
  searchCtrl = new FormControl();
  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );

  menuOpen = false;
  icStar = icStar;
  icSearch = icSearch;
  icContacts = icContacts;
  icMenu = icMenu;

  scrWidth: number; /* largeur écran */
  srcHeight: number; /* hauteur écran */
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrWidth = window.innerWidth;
    this.srcHeight = window.innerHeight;
  }
  tableData = [];

  columns: TableColumn<PathInterface>[] = [
    {
      label: this.translateService.instant('UPDATEPATH.PATHNAME'),
      property: 'name',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('UPDATEPATH.TYPE'),
      property: 'type',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('UPDATEPATH.ZONES'),
      property: 'zones',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('UPDATEPATH.CAPTURE'),
      property: 'isCapture',
      type: 'button',
      cssClasses: ['font-medium']
    },
    {
      label: this.translateService.instant('UPDATEPATH.NUMBERUSED'),
      property: 'usedNumber',
      type: 'text',
      cssClasses: ['text-secondary']
    }
  ];

    /** update-path ctor */
  constructor(private dialog: MatDialog, private translateService: TranslateService, private storePath: Store<fromPath.State>) {

  }

  ngOnInit() {
    this.storePath.pipe(select(fromPath.getAllPaths)).subscribe(
      (result: PathMinDisplayed[]) => {
        for (var i = 0; i < result.length; i++) {
          console.log(result[i]);
          var zones: string = null;
          var typePath: string = null;
          for (var j = 0; j < result[i].zones.length; j++) {
            console.log(result[i].zones);
            if (zones == null)
              zones = result[i].zones[j] +  ", ";
            else
              zones = zones + result[i].zones[j] + ", ";
          }
          if (zones != null )
            zones = zones.substring(0, zones.lastIndexOf(','));
          if (result[i].type == 0)
            typePath = "Combat";
          else
            typePath = "Récolte";

          this.tableData.push({
            name: result[i].name,
            type: typePath,
            zones: zones,
            isCapture: result[i].isCapture,
            usedNumber: result[i].usedNumber,
            key:result[i].key
          });
        };
      }
    );
  }

  openPath(pathKey?: PathInterface['key']) {
    this.getScreenSize();
    this.dialog.open(ModalUpdatePathComponent, {
      data: pathKey || null,
      width: '' + (this.scrWidth - (this.scrWidth/9)) + 'px',
      height: '' + (this.srcHeight - (this.srcHeight/15)) + 'px',
    }).afterClosed().subscribe(
      (result: any) => {
        this.storePath.pipe(select(fromPath.getAllPaths)).subscribe(
          (result: PathMinDisplayed[]) => {
            for (var i = 0; i < result.length; i++) {
              console.log(result[i]);
              var zones: string = null;
              var typePath: string = null;
              for (var j = 0; j < result[i].zones.length; j++) {
                console.log(result[i].zones);
                if (zones == null)
                  zones = result[i].zones[j] + ", ";
                else
                  zones = zones + result[i].zones[j] + ", ";
              }
              if (zones != null)
                zones = zones.substring(0, zones.lastIndexOf(','));
              if (result[i].type == 0)
                typePath = "Combat";
              else
                typePath = "Récolte";

              this.tableData.push({
                name: result[i].name,
                type: typePath,
                zones: zones,
                isCapture: result[i].isCapture,
                usedNumber: result[i].usedNumber,
                key: result[i].key
              });
            };
          }

        );
      }
    );
  }
  setData(data: Path[]) {
    this.tableData = data;
    this.menuOpen = false;
  }

  openMenu() {
    this.menuOpen = true;
  }
}
