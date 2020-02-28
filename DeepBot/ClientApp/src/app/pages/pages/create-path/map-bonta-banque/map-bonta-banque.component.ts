import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';


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
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuCombat: MatMenuTrigger;
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuBanque: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
    /** map-bonta ctor */
    constructor() {

  }

  selectMap(event) {
    console.log(event);
    const target = event.target as HTMLAreaElement

  }
 
  onContextMenu(event) {
    console.log(event.target.alt);
    console.log(this.statePath);
    this.rightClickPos = event.target.alt;
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';

    /* chemin de banque */
    if (this.statePath == 2) {
      this.contextMenuBanque.menu.focusFirstItem('mouse');
      this.contextMenuBanque.openMenu();
    }
  }

  onContextMenuActionSeparationGroupe() {
    console.log(this.rightClickPos);
  }

  onContextMenuActionRappel() {
    console.log(this.rightClickPos);
  }
  onContextMenuActionBonta() {
    console.log(this.rightClickPos);
  }
  onContextMenuActionBrak() {
    console.log(this.rightClickPos);
  }
  onContextMenuActionZaap() {
    console.log(this.rightClickPos);
  }
}
