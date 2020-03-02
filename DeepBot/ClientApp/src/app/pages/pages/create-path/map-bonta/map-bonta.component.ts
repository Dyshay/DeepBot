import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { PathService } from '../../../../services/path.service';


declare global {
  interface JQuery {
    mapster(): JQuery;
  }
}

@Component({
    selector: 'app-map-bonta',
    templateUrl: './map-bonta.component.html',
    styleUrls: ['./map-bonta.component.scss']
})
/** map-bonta component*/
export class MapBontaComponent {
  @Output() selectMapEvent = new EventEmitter<string>();
  @Output() specificActionEvent = new EventEmitter<{ position: string, event: string, payload?: any }>();

  rightClickPos: string;
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuZone: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
    /** map-bonta ctor */
    constructor(private pathService:PathService) {

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
      event:'separateGroup'
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
    console.log(this.rightClickPos);
  }

  selectMap(event) {
    this.selectMapEvent.next(event.target.alt);
  }

}
