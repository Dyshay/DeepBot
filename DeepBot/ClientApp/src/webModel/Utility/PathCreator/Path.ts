

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
