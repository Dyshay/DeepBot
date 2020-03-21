

export class Path {
  key?: string;
  name: string;
  type: number; 
  maxPod: number=80;
  monsterQuantityMin: number =0;
  monsterQuantityMax: number =8;
  groupLevelMin: number =0;
  groupLevelMax: number=9999;
  isCapture: boolean =false;
  leaderBank: boolean = false;
  captureItem: number;
  monsterLevel?: SpecificMonsterLevel[];
  monsterQuantity?: SpecificMonsterQuantity[];
  monsterCapture?: CaptureMonsterQuantity[];
  pathAction: PathAction[];
  listRessource: number[];
}
export class PathMinDisplayed {
  name: string;
  type: number;
  usedNumber: number;
  isCapture: number;
  zones: string[];
  key: string;
}

export class SpecificMonsterLevel {
  monsterId: number;
  monsterLevelMin: number;
  monsterLevelMax: number;

}

export class SpecificMonsterQuantity {
  monsterId: number;
  monsterQuantityMin: number;
  monsterQuantityMax: number;
}

export class CaptureMonsterQuantity {
  monsterId : number
  monsterQuantity:number
}

export class PathAction {
  mapPos: string;
  actions: MapAction[];
  
} 

export class MapAction {
  order: number;
  moveAction?: MoveAction;
  useItemAction?: UseItemAction;
  fightAction?: FightAction;
  gatherAction?: GatherAction;
  interactionAction?: InteractionAction;
  zaapAction?: ZaapAction;
  zaapiAction?: ZaapiAction;
  bankAction?: BankAction;
  
  
}
export class MoveAction {
  direction?: string[];
  cellId?: number;
  mapId?: number;
  toGoBank: boolean;
  toBackBank: boolean;
}
export class UseItemAction {
  itemId: number;
  toGoBank: boolean;
  toBackBank: boolean;
}
export class FightAction {
  isAlone: boolean;
}

export class GatherAction {

}

export class InteractionAction {
  interactiveIdObject: number;
  interactiveIdResponse: number;
  toGoBank: boolean;
  toBackBank: boolean;
}

export class ZaapAction {
  zaapId: number;
  destination: string;
  toGoBank: boolean;
  toBackBank: boolean;
}

export class ZaapiAction {
  zaapiId: number;
  destination: string;
  toGoBank: boolean;
  toBackBank: boolean;
}

export class BankAction {
  mapId: number;
}
