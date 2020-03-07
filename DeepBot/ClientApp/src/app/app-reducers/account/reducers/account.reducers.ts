import { createReducer, on } from '@ngrx/store';
import { AccountActions } from '../actions';
import { LogMessage } from 'src/webModel/LogMessage';
import { Character } from 'src/webModel/Character';
import { Account } from 'src/webModel/Account';
import { MapMessage } from '../../../../webModel/MapMessage';

export interface State {
  map: MapMessage | null,
  allAccounts: Account[] | null,
  accountCreated: Account | null,
  error: string | null,
  pending: boolean,

}

export const initialState: State = {
  map: null,
  allAccounts: null,
  accountCreated: null,
  error: null,
  pending: false
}


export const reducer = createReducer(initialState,
  on(AccountActions.receveidMaps, (state, { network }) => ({ ...state, map: network })),

  on(AccountActions.createAccount, (state) => ({ ...state, pending: true })),
  on(AccountActions.createAccountSuccess, (state, { accountBack }) => ({ ...state, accountCreated: accountBack, pending: false })),
  on(AccountActions.createAccountFailure, (state, { error }) => ({ ...state, error, pending: false })),
  on(AccountActions.getAllAccount, (state, { allAccounts }) => ({ ...state, allAccounts: allAccounts, pending: false })),


  on(AccountActions.updateAccount, (state) => ({ ...state, pending: true })),
  on(AccountActions.updateAccountSuccess, (state, { accountToUpdate }) => ({ ...state, pending: false })),
  on(AccountActions.updateAccountFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(AccountActions.deleteAccount, (state) => ({ ...state, pending: true })),
  on(AccountActions.deleteAccountSuccess, (state, { accontName }) => ({ ...state, pending: false })),
  on(AccountActions.deleteAccountFailure, (state, { error }) => ({ ...state, error, pending: false })),
)

export const getAccountCreated = (state: State) => state.accountCreated;
export const getAllAccounts = (state: State) => state.allAccounts;
export const getMap = (state: State) => state.map;
