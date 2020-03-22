
export class IA {
  key: string;
  name: string;
  fK_User: string;
  description: string;
  classe: Classe;
  type: TypeIA;
  actions: SpellAction[];
}

export class SpellAction {
  priority: number;
  nbLancer: number;
  spellId: number;
  spellName: string;
  target: Target;
  conditions: ConditionalAction[];
}
export class ConditionalAction {
  operator: OperatorType;
  conditionalType: ConditionalType;
  compareValue:number;
}

export enum Classe {
  Féca = 10,
  Osamodas = 20,
  Enutrof = 30,
  Sram = 40,
  Xélor = 50,
  Ecaflip = 60,
  Eniripsa = 70,
  Iop = 80,
  Cra = 90,
  Sadida = 100,
  Sacrieur = 110,
  Pandawa = 120
}
export namespace Classe {
  export function values() {
    return Object.keys(Classe).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum TypeIA {
  Fuyarde = 0,
  Agressif = 1,
  Hybride = 2
}
export namespace TypeIA {
  export function values() {
    return Object.keys(TypeIA).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum Target {
  Enemy = 0,
  Ally = 1,
  Myself = 2,
  Zone = 3
}
export namespace Target {
  export function values() {
    return Object.keys(Target).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}

export enum ConditionalType {
  PA = 0,
  PM = 1,
  Life = 2,
  IsInvoc = 3,
  EnemyRange = 4,
  AllyRange = 5,
  NbEnemy = 6,
  NbAlly = 7,
  AllyLife = 8,
  Enemylife = 9,
  IsBoss = 10,
  NbEnemyHitted = 11,
  Turn = 12
}
export namespace ConditionalType {
  export function values() {
    return Object.keys(ConditionalType).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum OperatorType {
  Inferior = 0,
  InferiorEqual = 1,
  Superior = 2,
  SuperiorEqual = 3,
  Equal = 4,
  NotEqual =5
}

export namespace OperatorType {
  export function values() {
    return Object.keys(OperatorType).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
