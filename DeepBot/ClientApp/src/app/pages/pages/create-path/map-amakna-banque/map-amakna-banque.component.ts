import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { DialogZaapComponent } from '../dialog-zaap/dialog-zaap.component';
import { DialogCellComponent } from '../dialog-cell/dialog-cell.component';
import { DialogUseItemComponent } from '../dialog-use-item/dialog-use-item.component';
import { PathService } from '../../../../services/path.service';
import { DialogInteractionComponent } from '../dialog-interaction/dialog-interaction.component';
import { DialogZaapiComponent } from '../dialog-zaapi/dialog-zaapi.component';
import { DialogListActionComponent } from '../dialog-list-action/dialog-list-action.component';
import { ListZaap } from '../../../../../webModel/Utility/PathCreator/Zaap';
import { ListZaapi } from '../../../../../webModel/Utility/PathCreator/Zaapi';
import { ListBank } from '../../../../../webModel/Utility/PathCreator/Bank';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-map-amakna-banque',
    templateUrl: './map-amakna-banque.component.html',
    styleUrls: ['./map-amakna-banque.component.scss']
})
/** map-amakna-banque component*/
export class MapAmaknaBanqueComponent {

  isZaapMap: boolean = false;
  isZaapiMap: boolean = false;
  isBankMap: boolean = false;
  @Output() selectMapEvent = new EventEmitter<string>();
  @Output() specificActionEvent = new EventEmitter<{ position: string, event: string, payload?: any }>();
  rightClickPos: string;
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuBanque: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
    /** map-amakna-banque ctor */
  constructor(public dialog: MatDialog, private pathService: PathService, private toastr: ToastrService, private translateService: TranslateService) {

  }


  onContextMenu(event) {
    this.rightClickPos = event.target.alt;
    this.isZaapMap = false;
    this.isZaapiMap = false;
    this.isBankMap = false;
    this.rightClickPos = event.target.alt;
    if (ListZaap.Zaaps.map(o => o.destination).includes(this.rightClickPos))
      this.isZaapMap = true;
    if (ListZaapi.Zaapis.map(o => o.destination).includes(this.rightClickPos))
      this.isZaapiMap = true;
    if (ListBank.Banks.map(o => o.posBank).includes(this.rightClickPos))
      this.isBankMap = true;
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
  onContextMenuActionBank() {
    this.specificActionEvent.next({
      position: this.rightClickPos,
      event: 'bankProcess',
    })
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
        this.toastr.warning('', this.translateService.instant('CREATEPATH.PATHACTIONMSG16'));
    }
    else {
      this.toastr.warning('', this.translateService.instant('CREATEPATH.PATHACTIONMSG17'));
    }
  }

  selectMap(event) {
    this.selectMapEvent.next(event.target.alt);
  }

}
