

export class Path {
  name: string;
  type: number; /* 0 fight , 1 gather */
  maxPod: number;
  monsterQuantityMin: number;
  monsterQuantityMax: number;
  groupLevelMin: number;
  groupLevelMax: number;
  isCapture: boolean =false;
  leaderBank: boolean = false;
  captureItem: number;
  monsterLevel: SpecificMonsterLevel[];
  monsterQuantity: SpecificMonsterQuantity[];
  monsterCapture: CaptureMonsterQuantity[];
  pathAction: PathAction[];
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
}
export class MoveAction {
  direction?: string[];
  cellId?: number;
  toGoBank: boolean;
  toBackBank: boolean;
}
export class UseItemAction {
  itemId: number;
}
export class FightAction {
  isAlone: boolean;
}

export class GatherAction {

}
export class InteractionAction {
  interactiveId: number;
  cellId: number;
}
