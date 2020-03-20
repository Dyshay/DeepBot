
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
  target: Target;
  conditions: ConditionalAction[];
}
export class ConditionalAction {
  operator: OperatorType;
  ConditionalType: ConditionalType;
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
export enum TypeIA {
  Fuyarde = 0,
  Agressif = 1,
  Hybride = 2
}
export enum Target {
  Enemy = 0,
  Ally = 1,
  Myself = 2,
  Zone = 3
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
export enum OperatorType {
  Inferior = 0,
  InferiorEqual = 1,
  Superior = 2,
  SuperiorEqual = 3,
  Equal = 4
}
