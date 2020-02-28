import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';


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
  @Input() statePath;
  rightClickPos: string;
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuCombat: MatMenuTrigger;
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuDeplacement: MatMenuTrigger;
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

    /* chemin de combat */
    if (this.statePath == 0) {
      this.contextMenuCombat.menu.focusFirstItem('mouse');
      this.contextMenuCombat.openMenu();
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
