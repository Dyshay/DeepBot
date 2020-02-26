import { props, createAction } from '@ngrx/store';
import { CharacterMessage, Character } from 'src/webModel/Character';
import { ConfigCharacter } from '../../../../webModel/ConfigCharacter';


export const receveidCharacters = createAction('[BOT/TALK] RECEIVE CHARACTERS', props<{ network: CharacterMessage }>());
export const resetReceveidCharacters = createAction('[BOT/TALK] RESET RECEIVE CHARACTERS');

export const getAllCharacters = createAction('[BOT/CHARACTER] GET ALLCHARACTERS', props<{ allCharacters: Character[] }>());
export const getAllCurrentCharacters = createAction('[BOT/CHARACTER] GET ALLCURRENTCHARACTERS', props<{ allCurrentCharacters: Character[] }>());

export const updateCharacterFKGroup = createAction('[BOT/CHARACTER] UPDATE FK_GROUP CHARACTER', props<{ fk_Group: string, key: number }>());

export const updateCharacterConfig = createAction('[BOT/ACCOUNT] UPDATE  CHARACTER CONFIG', props<{ characterConfigToUpdate: ConfigCharacter }>());
export const updateCharacterConfigSuccess = createAction('[BOT/ACCOUNT] UPDATE CHARACTER CONFIG SUCCESS', props<{ characterConfigToUpdate: ConfigCharacter }>());
export const updateCharacterConfigFailure = createAction('[BOT/ACCOUNT] UPDATE CHARACTER CONFIG ERROR', props<{ error: any }>());


