import { Character } from '../Character';

export interface GroupInterface {
  name: string;
  leader: Character;
  followers: Character[];
  creationDate: Date;
  description: boolean;
  groupLevel: number;
}
