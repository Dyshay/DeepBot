import { props, createAction } from '@ngrx/store';
import { LogMessage } from 'src/webModel/LogMessage';
import { CharacterMessage } from 'src/webModel/Character';
import { Account } from '../../../../../webModel/Account';

export const receveidLogs = createAction('[BOT/TALK] SEND LOG', props<{ network: LogMessage }>());
export const receveidCharacters = createAction('[BOT/TALK] RECEIVE CHARACTERS', props<{ network: CharacterMessage }>());

export const createAccount = createAction('[BOT/TALK] SEND ACCOUNT', props<{  account: Account  }>());
export const createAccountSuccess = createAction('[BOT/TALK] SEND ACCOUNT SUCCESS', props<{ account: any }>());
export const createAccountFailure = createAction('[BOT/TALK] SEND ACCOUNT ERROR', props<{ error: any }>());

