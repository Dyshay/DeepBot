import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { PathService } from '../../../../services/path.service';
import { DialogZaapComponent } from '../dialog-zaap/dialog-zaap.component';


declare global {
  interface JQuery {
    mapster(): JQuery;
  }
}

@Component({
    selector: 'app-map-bonta-retour',
    templateUrl: './map-bonta-retour.component.html',
    styleUrls: ['./map-bonta-retour.component.scss']
})
/** map-bonta component*/
export class MapBontaRetourComponent {
  rightClickPos: string;
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuBanqueRetour: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
    /** map-bonta ctor */
  constructor(private pathService: PathService, public dialog: MatDialog) {

  }

  selectMap(event) {
    const target = event.target as HTMLAreaElement

  }
 
  onContextMenu(event) {
    this.rightClickPos = event.target.alt;
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
 
    this.contextMenuBanqueRetour.menu.focusFirstItem('mouse');
    this.contextMenuBanqueRetour.openMenu();
    

  }

  onContextMenuActionUseItem(item) {

  }
  onContextMenuActionCell() {

  }
  onContextMenuActionList() {

  }

  onContextMenuActionZaap() {
    var zaap;
    const dialogRef = this.dialog.open(DialogZaapComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      zaap = result;
    });
  }
}
