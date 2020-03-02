import { Component, Input } from '@angular/core';
import { Group } from '../../../../../webModel/Group';
import { TranslateService } from '@ngx-translate/core';


export interface consommable {
  id: number,
  name: string,
  quantity: number,
  toUse: boolean,
}
export interface itemDofus {
  id: number,
  name: string,
  quantity: number,
  type: string
}
export interface ressources {
  id: number,
  name: string,
  quantity: number,
  autoDelete: boolean
}


@Component({
  selector: 'app-group-inventory',
  templateUrl: './group-inventory.component.html',
  styleUrls: ['./group-inventory.component.scss']
})
/** group-inventory component*/
export class GroupInventoryComponent {
  @Input() group: Group;
    /** group-inventory ctor */
  constructor(private translateService: TranslateService) {

  }


  consommablesDofus: consommable[] = [
    { id: 1, name: 'Potion de rappel', quantity: 100, toUse: true },
    { id: 2, name: 'Pain boulanger', quantity: 80, toUse: true },
    { id: 3, name: 'Potion de bonta', quantity: 23, toUse: false },
    { id: 4, name: 'Potion de brakmar', quantity: 85, toUse: false },
  ]
  itemDofus: itemDofus[] = [
    { id: 5, name: 'baton tontata', quantity: 1, type: 'Arme' },
    { id: 6, name: 'Coiffe Bouftou', quantity: 3, type: 'Coiffe' },
    { id: 7, name: 'Cape Bouftou', quantity: 3, type: 'Cape' },
    { id: 8, name: 'Cape chene mou', quantity: 1, type: 'Cape' },
    { id: 9, name: 'Geloture', quantity: 2, type: 'Ceinture' },
  ]
  ressourcesDofus: ressources[] = [
    { id: 10, name: 'Plume de piou rouge', quantity: 100, autoDelete: false },
    { id: 11, name: 'Gelée Menthe', quantity: 1850, autoDelete: false },
    { id: 12, name: 'Gelée Fraise', quantity: 88, autoDelete: false },
    { id: 13, name: 'Gelée bleutée', quantity: 8008, autoDelete: false },
  ]
  banqueDofus: ressources[] = [
    { id: 10, name: 'Plume de piou rouge', quantity: 108260, autoDelete: false },
    { id: 11, name: 'Gelée Menthe', quantity: 18950, autoDelete: false },
    { id: 12, name: 'Gelée Fraise', quantity: 8588, autoDelete: false },
    { id: 13, name: 'Gelée bleutée', quantity: 80098, autoDelete: false },
  ]
}
