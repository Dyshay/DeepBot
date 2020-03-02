import { Character } from './Character';
import { Trajet } from './Trajet';
import { ConfigGroup } from './ConfigGroup';

export class Group {
  key: string;
  name: string;
  description: string;
  fk_Leader?: number;
  fk_Configuration?: string;
  fk_Followers?: number[];
  followers?: Character[];
  leader?: Character;
  config?: ConfigGroup;
  trajet?: Trajet;
  groupProspection?: number;
  groupLevel?: number;
  groupTotal?: number;
}


