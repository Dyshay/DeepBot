import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { PathService } from '../../../../services/path.service';
import { DialogZaapComponent } from '../dialog-zaap/dialog-zaap.component';
import { DialogCellComponent } from '../dialog-cell/dialog-cell.component';
import { DialogUseItemComponent } from '../dialog-use-item/dialog-use-item.component';


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
  @Output() selectMapEvent = new EventEmitter<string>();
  @Output() specificActionEvent = new EventEmitter<{ position: string, event: string, payload?: any }>();

  @ViewChild(MatMenuTrigger, { static: false }) contextMenuBanqueRetour: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
    /** map-bonta ctor */
  constructor(private pathService: PathService, public dialog: MatDialog) {

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
    var consommable;
    if (item == null) {
      const dialogRef = this.dialog.open(DialogUseItemComponent, {
        width: '450px',
      });
      dialogRef.afterClosed().subscribe(result => {
        consommable = result;
      });
    }
    else
      consommable = item;

    this.specificActionEvent.next({
      position: this.rightClickPos,
      event: 'useItem',
      payload: consommable
    });

  }
  onContextMenuActionCell() {
    var cells;
    const dialogRef = this.dialog.open(DialogCellComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      cells = result;
      this.specificActionEvent.next({
        position: this.rightClickPos,
        event: 'cellMove',
        payload: cells
      });
    });
  }

  onContextMenuActionZaap() {
    var zaap;
    const dialogRef = this.dialog.open(DialogZaapComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      zaap = result;
      this.specificActionEvent.next({
        position: this.rightClickPos,
        event: 'useZaap',
        payload: zaap
      });
    });

  }
  onContextMenuActionList() {

  }

  selectMap(event) {
    this.selectMapEvent.next(event.target.alt);
  }
}
