import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { DialogZaapComponent } from '../dialog-zaap/dialog-zaap.component';
import { DialogCellComponent } from '../dialog-cell/dialog-cell.component';
import { DialogUseItemComponent } from '../dialog-use-item/dialog-use-item.component';
import { PathService } from '../../../../services/path.service';
import { DialogInteractionComponent } from '../dialog-interaction/dialog-interaction.component';
import { DialogZaapiComponent } from '../dialog-zaapi/dialog-zaapi.component';
import { DialogListActionComponent } from '../dialog-list-action/dialog-list-action.component';


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
  @Output() selectMapEvent = new EventEmitter<string>();
  @Output() specificActionEvent = new EventEmitter<{ position: string, event: string, payload?: any }>();
  rightClickPos: string;
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuBanque: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  /** map-bonta ctor */
  constructor(public dialog: MatDialog, private pathService: PathService) {

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
        if (consommable != null)
        this.specificActionEvent.next({
          position: this.rightClickPos,
          event: 'useItem',
          payload: consommable
        });
      });
    }
    else {
      consommable = item;
      this.specificActionEvent.next({
        position: this.rightClickPos,
        event: 'useItem',
        payload: consommable
      });
    }


  }
  onContextMenuActionCell() {
    var cells;
    const dialogRef = this.dialog.open(DialogCellComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      cells = result;
      if (cells != null)
      this.specificActionEvent.next({
        position: this.rightClickPos,
        event: 'cellMove',
        payload: cells
      });
    });

  }

  onContextMenuActionZaapi() {
    var zaapi;
    const dialogRef = this.dialog.open(DialogZaapiComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      zaapi = result;
      if (zaapi != null)
        this.specificActionEvent.next({
          position: this.rightClickPos,
          event: 'useZaapi',
          payload: zaapi
        });
    });
  }

  onContextMenuActionZaap() {
    var zaap;
    const dialogRef = this.dialog.open(DialogZaapComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      zaap = result;
      if (zaap != null)
      this.specificActionEvent.next({
        position: this.rightClickPos,
        event: 'useZaap',
        payload: result
      });
    });
  }
  onContextMenuActionInteraction() {
    var interaction;
    const dialogRef = this.dialog.open(DialogInteractionComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      interaction = result;
      if(interaction != null)
      this.specificActionEvent.next({
        position: this.rightClickPos,
        event: 'interaction',
        payload: interaction
      });
    });
  }

  onContextMenuActionList() {
    var actions = this.pathService.getAlActionsOnMap(this.rightClickPos);
    if (actions.actions.length > 0)
     this.dialog.open(DialogListActionComponent, {
      width: '600px',
      height: '500px',
      data: actions
    });

  }

  selectMap(event) {
    this.selectMapEvent.next(event.target.alt);
  }

}
