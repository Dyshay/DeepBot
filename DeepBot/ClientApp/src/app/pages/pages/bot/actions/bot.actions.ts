import { props, createAction } from '@ngrx/store';
import { LogMessage } from 'src/webModel/LogMessage';
import { CharacterMessage, Character } from 'src/webModel/Character';
import { Account, CreateAccount } from '../../../../../webModel/Account';
import { Group } from '../../../../../webModel/Group';

export const receveidLogs = createAction('[BOT/TALK] SEND LOG', props<{ network: LogMessage }>());
export const receveidCharacters = createAction('[BOT/TALK] RECEIVE CHARACTERS', props<{ network: CharacterMessage }>());

export const createAccount = createAction('[BOT/ACCOUNT] CREATE ACCOUNT', props<{ account: Account  }>());
export const createAccountSuccess = createAction('[BOT/ACCOUNT] CREATE ACCOUNT SUCCESS', props<{ account: Account }>());
export const createAccountFailure = createAction('[BOT/ACCOUNT] CREATE ACCOUNT ERROR', props<{ error: any }>());

export const getAllCharacters = createAction('[BOT/CHARACTER] GET ALLCHARACTERS')
export const getAllCharactersSuccess = createAction('[BOT/CHARACTER] GET ALLCHARACTERS SUCCESS', props<{characters : Character[]}>())
export const getAllCharactersFailure = createAction('[BOT/CHARACTER] GET ALLCHARACTERS ERROR', props<{ error: any }>())

export const createGroup = createAction('[BOT/GROUP] CREATE GROUP', props<{ group: Group }>());
export const createGroupSuccess = createAction('[BOT/GROUP] CREATE GROUP SUCCESS', props<{ group: Group }>());
export const createGroupFailure = createAction('[BOT/GROUP] CREATE GROUP ERROR', props<{ error: any }>())
