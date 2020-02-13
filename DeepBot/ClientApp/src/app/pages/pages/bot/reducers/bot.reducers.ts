import { createReducer, on } from '@ngrx/store';
import { BotActions } from '../actions';
import { LogMessage } from 'src/webModel/LogMessage';
import { Character } from 'src/webModel/Character';
import { Account } from 'src/webModel/Account';
import { Group } from '../../../../../webModel/Group';

export interface State {
  logs: LogMessage[];
  characters: Character[];
  allCharacters: Character[],
  account: Account | null;
  error: string | null;
  pending: boolean,
  group: Group | null;
}

export const initialState: State = {
  logs: [],
  characters: [],
  allCharacters: [],
  group:null,
  account: null,
  error: null,
  pending: false
}


export const reducer = createReducer(initialState,
  on(BotActions.receveidLogs, (state, { network }) => ({ ...state, logs: state.logs.concat(network) })),

  on(BotActions.createAccount, (state) => ({ ...state, pending: true  })),
  on(BotActions.createAccountSuccess, (state, { account }) => ({ ...state, account: account ,pending:false})),
  on(BotActions.createAccountFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(BotActions.receveidCharacters, (state, { network }) => ({ ...state, characters: network.characters })),

  on(BotActions.getAllCharacters, (state) => ({ ...state, pending: true })),
  on(BotActions.getAllCharactersSuccess, (state, { characters }) => ({ ...state, allCharacters: characters, pending: false })),
  on(BotActions.getAllCharactersFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(BotActions.createGroup, (state) => ({ ...state, pending: true })),
  on(BotActions.createGroupSuccess, (state, { group }) => ({ ...state, group: group, pending: false })),
  on(BotActions.createGroupFailure, (state, { error }) => ({ ...state, error, pending: false })),
)


export const getLogs = (state: State) => state.logs;
export const getCharacters = (state: State) => state.characters;
export const getAccount = (state: State) => state.account;
export const getAllCharacters = (State: State) => State.allCharacters;
