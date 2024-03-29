import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { PathService } from '../../../../services/path.service';
import { DialogListActionComponent } from '../dialog-list-action/dialog-list-action.component';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';



@Component({
    selector: 'app-map-sidimote',
    templateUrl: './map-sidimote.component.html',
    styleUrls: ['./map-sidimote.component.scss']
})
/** map-sidimote component*/
export class MapSidimoteComponent {
  @Output() selectMapEvent = new EventEmitter<string>();
  @Output() specificActionEvent = new EventEmitter<{ position: string, event: string, payload?: any }>();

  rightClickPos: string;
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuZone: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
    /** map-sidimote ctor */
  constructor(public dialog: MatDialog, private pathService: PathService, private toastr: ToastrService, private translateService: TranslateService) {

  }
  onContextMenu(event) {
    this.rightClickPos = event.target.alt;
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';

    this.contextMenuZone.menu.focusFirstItem('mouse');
    this.contextMenuZone.openMenu();

  }

  onContextMenuActionSeparationGroupe() {
    this.specificActionEvent.next({
      position: this.rightClickPos,
      event: 'separateGroup'
    });
  }
  onContextMenuActionNoFight() {
    this.specificActionEvent.next({
      position: this.rightClickPos,
      event: 'noFight'
    });
  }
  onContextMenuActionNoGather() {
    this.specificActionEvent.next({
      position: this.rightClickPos,
      event: 'noGather'
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
