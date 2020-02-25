import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Character } from '../../../../../webModel/Character';

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
  autoDelete:boolean
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
/** inventory component*/
export class InventoryComponent {
  @Input() character: Character

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
    { id: 13, name: 'Gelée bleutée', quantity: 8008 ,autoDelete:false},
  ]
  banqueDofus: ressources[] = [
    { id: 10, name: 'Plume de piou rouge', quantity: 108260, autoDelete: false },
    { id: 11, name: 'Gelée Menthe', quantity: 18950, autoDelete: false },
    { id: 12, name: 'Gelée Fraise', quantity: 8588, autoDelete: false },
    { id: 13, name: 'Gelée bleutée', quantity: 80098, autoDelete: false},
  ]
  /** inventory ctor */
  constructor(private translateService: TranslateService) {

  }
}
