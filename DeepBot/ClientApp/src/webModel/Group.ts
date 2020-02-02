import { Character } from './Character';
import { Trajet } from './Trajet';
import { ConfigGroup } from './ConfigGroup';

export class Group {
  id: string;
  name: string;
  description: string;
  leader: Character
  followers: Character[];
  config: ConfigGroup;
  trajet: Trajet;
  prospection: number;
  level: number;
}


