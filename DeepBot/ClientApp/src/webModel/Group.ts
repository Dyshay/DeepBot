import { Character } from './Character';

export interface Group {
    followers: Character[],
    leader: Character,
    groupName: string,
    groupLevel: number,
    groupProspection: number,
    groupTotal: number,
    groupId : number
}
