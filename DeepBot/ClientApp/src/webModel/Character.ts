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
  sex: number =0;
  kamas?: number;
  availableCharactericsPts?: number;
  availableSpellPts?: number;
  serverId: number;
  cell?: Cell;
  trajet?: Trajet;
  config?: ConfigCharacter;
  group?: Group;
  ia?: IA;
  spells?: Spell[];
  characteristic?: Caracteristic;
  inventory?: Inventory;
  jobs?: Job[];
  map?: CharacterMap;
}


export interface CharacterMessage {
  type: LogType,
  characters: Character[],
  tcpId: string
}
