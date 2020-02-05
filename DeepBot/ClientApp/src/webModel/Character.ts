import { Classe } from './Enum/Classe';
import { Trajet } from './Trajet';
import { ConfigCharacter } from './ConfigCharacter';
import { Group } from './Group';
import { IA } from './IA';
import { Cell } from './Cell';
import { Spell } from './Spell';
import { Caracteristic } from './Caracteristic';
import { Inventory } from './Inventory';
import { Job } from './Job';
import { CharacterMap } from './CharacterMap';
import { LogType } from './Enum/LogType';

export class Character {
  id: number;
  fK_IA?: string;
  fK_Group?: string;
  fK_Configuration?: string;
  fK_Trajet?: string;
  name: string;
  level: number;
  breedId: number;
  sex: number;
  kamas?: number;
  availableCharactericsPts?: number;
  availableSpellPts?: number;
  cell?: Cell;
  trajet?: Trajet;
  config?: ConfigCharacter;
  group?: Group;
  ia?: IA;
  spells?: Spell[];
  caracteristic?: Caracteristic;
  inventory?: Inventory;
  jobs?: Job[];
  map?: CharacterMap;
}


export interface CharacterMessage {
  characters: Character[],
  tcpId: string
}
