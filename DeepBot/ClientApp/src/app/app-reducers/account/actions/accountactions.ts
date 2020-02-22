import { props, createAction } from '@ngrx/store';
import { Account } from '../../../../webModel/Account';
import { LogMessage } from '../../../../webModel/LogMessage';



export const receveidLogs = createAction('[BOT/TALK] RECEIVED LOG', props<{ network: LogMessage }>());

export const createAccount = createAction('[BOT/ACCOUNT] CREATE ACCOUNT', props<{ accountCreated: Account  }>());
export const createAccountSuccess = createAction('[BOT/ACCOUNT] CREATE ACCOUNT SUCCESS', props<{ accountCreated: Account }>());
export const createAccountFailure = createAction('[BOT/ACCOUNT] CREATE ACCOUNT ERROR', props<{ error: any }>());

export const getAllAccount = createAction('[BOT/ACCOUNT] GET ALL ACCOUNT', props<{ allAccounts: Account[] }>());



export const updateAccount = createAction('[BOT/ACCOUNT] UPDATE  ACCOUNT', props<{ accountToUpdate: Account }>());
export const updateAccountSuccess = createAction('[BOT/ACCOUNT] UPDATE ACCOUNT SUCCESS', props<{ accountToUpdate: Account }>());
export const updateAccountFailure = createAction('[BOT/ACCOUNT] UPDATE ACCOUNT ERROR', props<{ error: any }>());

