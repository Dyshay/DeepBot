import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { DialogZaapComponent } from '../dialog-zaap/dialog-zaap.component';
import { DialogCellComponent } from '../dialog-cell/dialog-cell.component';
import { DialogUseItemComponent } from '../dialog-use-item/dialog-use-item.component';


declare global {
  interface JQuery {
    mapster(): JQuery;
  }
}

@Component({
  selector: 'app-map-bonta-banque',
  templateUrl: './map-bonta-banque.component.html',
  styleUrls: ['./map-bonta-banque.component.scss']
})
/** map-bonta component*/
export class MapBontaBanqueComponent {
  @Input() statePath;
  rightClickPos: string;
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuBanque: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  /** map-bonta ctor */
  constructor(public dialog: MatDialog) {

  }

  selectMap(event) {
    console.log(event);
    const target = event.target as HTMLAreaElement

  }

  onContextMenu(event) {
    this.rightClickPos = event.target.alt;
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';

    this.contextMenuBanque.menu.focusFirstItem('mouse');
    this.contextMenuBanque.openMenu();

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



 

  }
  onContextMenuActionCell() {
    var cells;
    const dialogRef = this.dialog.open(DialogCellComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      cells = result;
    });

  }
  onContextMenuActionList() {

  }

  onContextMenuActionZaap() {
    var zaap;
    const dialogRef = this.dialog.open(DialogZaapComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      zaap = result;
    });
  }

}
