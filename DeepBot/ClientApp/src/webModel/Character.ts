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

export class Character {
  id: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterBreedId: number;
  sex: number;
  kamas: number;
  availableCharactericsPts: number;
  availableSpellPts: number;
  cell: Cell;
  trajet: Trajet;
  config: ConfigCharacter;
  group: Group;
  ia: IA;
  spells: Spell[];
  caracteristic: Caracteristic;
  inventory: Inventory;
  jobs: Job[];
  map: CharacterMap;

}


