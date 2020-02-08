import { createReducer, on } from '@ngrx/store';
import { BotActions } from '../actions';
import { LogMessage } from 'src/webModel/LogMessage';
import { Character } from 'src/webModel/Character';
import { Account } from 'src/webModel/Account';

export interface State {
  logs: LogMessage[];
  characters: Character[];
  account: Account | null;
  error: string | null;
}

export const initialState: State = {
  logs: [],
  characters: [],
  account: null,
  error:null
}


export const reducer = createReducer(initialState,
  on(BotActions.receveidLogs, (state, { network }) => ({ ...state, logs: state.logs.concat(network) })),
  on(BotActions.createAccount, (state) => ({ ...state })),
  on(BotActions.createAccountSuccess, (state, { account }) => ({ ...state, account: account })),
  on(BotActions.createAccountFailure, (state, { error }) => ({ ...state, error })),
  on(BotActions.receveidCharacters, (state, { network }) => ({...state, characters: network.characters})),
)


export const getLogs = (state: State) => state.logs;
export const getCharacters = (state: State) => state.characters;
export const getAccount = (state: State) => state.account;
