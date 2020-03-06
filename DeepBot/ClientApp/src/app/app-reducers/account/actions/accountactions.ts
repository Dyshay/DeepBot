import { props, createAction } from '@ngrx/store';
import { Account } from '../../../../webModel/Account';
import { LogMessage } from '../../../../webModel/LogMessage';
import { MapMessage } from '../../../../webModel/MapMessage';
import { AccountModel } from 'src/webModel/AccountModel';



export const receveidMaps = createAction('[BOT/TALK] RECEIVED MAP', props<{ network: MapMessage }>());

export const createAccount = createAction('[BOT/ACCOUNT] CREATE ACCOUNT', props<{ acc: AccountModel  }>());
export const createAccountSuccess = createAction('[BOT/ACCOUNT] CREATE ACCOUNT SUCCESS', props<{ accountBack: Account }>());
export const createAccountFailure = createAction('[BOT/ACCOUNT] CREATE ACCOUNT ERROR', props<{ error: any }>());

export const getAllAccount = createAction('[BOT/ACCOUNT] GET ALL ACCOUNT', props<{ allAccounts: Account[] }>());



export const updateAccount = createAction('[BOT/ACCOUNT] UPDATE  ACCOUNT', props<{ accountToUpdate: Account }>());
export const updateAccountSuccess = createAction('[BOT/ACCOUNT] UPDATE ACCOUNT SUCCESS', props<{ accountToUpdate: Account }>());
export const updateAccountFailure = createAction('[BOT/ACCOUNT] UPDATE ACCOUNT ERROR', props<{ error: any }>());


export const deleteAccount = createAction('[BOT/ACCOUNT] DELETE  ACCOUNT', props<{ accountKeyToDelete: string }>());
export const deleteAccountSuccess = createAction('[BOT/ACCOUNT] DELETE ACCOUNT SUCCESS', props<{ accontName: string }>());
export const deleteAccountFailure = createAction('[BOT/ACCOUNT] DELETE ACCOUNT ERROR', props<{ error: any }>());
