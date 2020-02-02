import { ItemType } from './Enum/ItemType';
import { ItemSlot } from './Enum/ItemSlot';

export class Item {
  idInventory: number;
  idModel: number;
  name: string;
  level: number;
  type: ItemType;
  position: ItemSlot;
  quantity: number;
  isUsable: boolean;
  isEquipable: boolean;
}


