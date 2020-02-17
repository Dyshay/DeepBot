import { props, createAction } from '@ngrx/store';
import { LogMessage } from 'src/webModel/LogMessage';
import { CharacterMessage, Character } from 'src/webModel/Character';


export const receveidCharacters = createAction('[BOT/TALK] RECEIVE CHARACTERS', props<{ network: CharacterMessage }>());

export const getAllCharacters = createAction('[BOT/CHARACTER] GET ALLCHARACTERS')
export const getAllCharactersSuccess = createAction('[BOT/CHARACTER] GET ALLCHARACTERS SUCCESS', props<{characters : Character[]}>())
export const getAllCharactersFailure = createAction('[BOT/CHARACTER] GET ALLCHARACTERS ERROR', props<{ error: any }>())

export const updateCharacterFKGroup = createAction('[BOT/CHARACTER] UPDATE FK_GROUP CHARACTER', props<{ fk_group: string, key: number }>());


