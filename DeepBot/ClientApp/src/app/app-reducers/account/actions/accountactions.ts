import { props, createAction } from '@ngrx/store';
import { Account } from '../../../../webModel/Account';



export const createAccount = createAction('[BOT/ACCOUNT] CREATE ACCOUNT', props<{ accountCreated: Account  }>());
export const createAccountSuccess = createAction('[BOT/ACCOUNT] CREATE ACCOUNT SUCCESS', props<{ accountCreated: Account }>());
export const createAccountFailure = createAction('[BOT/ACCOUNT] CREATE ACCOUNT ERROR', props<{ error: any }>());


export const updateAccountAccountName = createAction('[BOT/ACCOUNT] UPDATE ACCOUNTNAME ACCOUNT', props<{ accountName: string, key: number }>());
export const updateAccountPassword = createAction('[BOT/ACCOUNT] UPDATE PASSWORD ACCOUNT', props<{ password: string, key: number }>());
export const updateAccountServerId = createAction('[BOT/ACCOUNT] UPDATE SERVERID ACCOUNT', props<{ serverId: string, key: number }>());
