import { Classe } from './Enum/Classe';
import { CellTypes } from './Enum/AccountState';

export class Cell {
  id: string;
  isActive: boolean;
  type: CellTypes;
  IsInLineOfSight: boolean
  layerGroundLevel: number;
  layerGroundSlope: number;
  layerObject1: number;
  layerObject2: number;
  interactiveObject: number;
  x: number;
  y: number;
  teleportTexturesSpritesId: number[];
  IsWalkable: boolean;
  isTeleportCell: boolean;
  isInteractiveCell: boolean;
}


