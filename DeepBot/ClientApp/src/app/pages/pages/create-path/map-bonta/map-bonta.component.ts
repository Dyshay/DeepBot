import { Component, ViewChild, Input } from '@angular/core';
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
  rightClickPos: string;
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuZone: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
    /** map-bonta ctor */
    constructor(private pathService:PathService) {

  }

  selectMap(event) {
    console.log(event);

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
    console.log(this.rightClickPos);
  }
  onContextMenuActionNoFight() {
    console.log(this.rightClickPos);
  }
  onContextMenuActionNoGather() {
    console.log(this.rightClickPos);
  }
  onContextMenuActionList() {
    console.log(this.rightClickPos);
  }

}
