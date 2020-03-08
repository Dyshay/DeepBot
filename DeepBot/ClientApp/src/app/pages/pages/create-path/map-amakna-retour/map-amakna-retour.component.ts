import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { PathService } from '../../../../services/path.service';
import { DialogZaapComponent } from '../dialog-zaap/dialog-zaap.component';
import { DialogCellComponent } from '../dialog-cell/dialog-cell.component';
import { DialogUseItemComponent } from '../dialog-use-item/dialog-use-item.component';
import { DialogInteractionComponent } from '../dialog-interaction/dialog-interaction.component';
import { DialogZaapiComponent } from '../dialog-zaapi/dialog-zaapi.component';
import { DialogListActionComponent } from '../dialog-list-action/dialog-list-action.component';
import { ListZaap } from '../../../../../webModel/Utility/PathCreator/Zaap';
import { ListZaapi } from '../../../../../webModel/Utility/PathCreator/Zaapi';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';


declare global {
  interface JQuery {
    mapster(): JQuery;
  }
}

@Component({
    selector: 'app-map-amakna-retour',
    templateUrl: './map-amakna-retour.component.html',
    styleUrls: ['./map-amakna-retour.component.scss']
})
/** map-amakna-retour component*/
export class MapAmaknaRetourComponent {
  rightClickPos: string;
  isZaapMap: boolean = false;
  isZaapiMap: boolean = false;
  @Output() selectMapEvent = new EventEmitter<string>();
  @Output() specificActionEvent = new EventEmitter<{ position: string, event: string, payload?: any }>();

  @ViewChild(MatMenuTrigger, { static: false }) contextMenuBanqueRetour: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
    /** map-amakna-retour ctor */
  constructor(private pathService: PathService, public dialog: MatDialog, private toastr: ToastrService, private translateService: TranslateService) {

  }

  onContextMenu(event) {
    this.isZaapMap = false;
    this.isZaapiMap = false;
    this.rightClickPos = event.target.alt;
    if (ListZaap.Zaaps.map(o => o.destination).includes(this.rightClickPos))
      this.isZaapMap = true;
    if (ListZaapi.Zaapis.map(o => o.destination).includes(this.rightClickPos))
      this.isZaapiMap = true;
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
          payload: zaap
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
      if (interaction != null)
        this.specificActionEvent.next({
          position: this.rightClickPos,
          event: 'interaction',
          payload: interaction
        });
    });
  }
  onContextMenuActionList() {
    var actions = this.pathService.getAlActionsOnMap(this.rightClickPos);
    if (actions != null) {
      if (actions.actions.length > 0)
        this.dialog.open(DialogListActionComponent, {
          width: '600px',
          height: '500px',
          data: actions
        });
      else
        this.toastr.warning('', this.translateService.instant('GLOBAL.PATHACTIONMSG16'));
    }
    else {
      this.toastr.warning('', this.translateService.instant('GLOBAL.PATHACTIONMSG17'));
    }
  }

  selectMap(event) {
    this.selectMapEvent.next(event.target.alt);
  }
}
