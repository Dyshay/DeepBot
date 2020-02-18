import { props, createAction } from '@ngrx/store';
import { LogMessage } from 'src/webModel/LogMessage';
import { CharacterMessage, Character } from 'src/webModel/Character';


export const receveidCharacters = createAction('[BOT/TALK] RECEIVE CHARACTERS', props<{ network: CharacterMessage }>());

export const getAllCharacters = createAction('[BOT/CHARACTER] GET ALLCHARACTERS', props<{allCharacters:Character[]}>())
export const getAllCurrentCharacters = createAction('[BOT/CHARACTER] GET ALLCURRENTCHARACTERS', props<{ allCurrentCharacters: Character[] }>())

export const updateCharacterFKGroup = createAction('[BOT/CHARACTER] UPDATE FK_GROUP CHARACTER', props<{ fk_group: string, key: number }>());


