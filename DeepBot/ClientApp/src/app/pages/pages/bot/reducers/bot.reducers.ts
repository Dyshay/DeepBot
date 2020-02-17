import { createReducer, on } from '@ngrx/store';
import { BotActions } from '../actions';
import { LogMessage } from 'src/webModel/LogMessage';
import { Character } from 'src/webModel/Character';
import { Account } from 'src/webModel/Account';
import { Group } from '../../../../../webModel/Group';

export interface State {
  logs: LogMessage[];
  scanCharacters: Character[];
  allCharacters: Character[],
  account: Account | null;
  allGroups: Group[],
  error: string | null;
  pending: boolean,
  group: Group | null;
}

export const initialState: State = {
  logs: [],
  scanCharacters: [],
  allCharacters: [],
  allGroups: [],
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

  on(BotActions.receveidCharacters, (state, { network }) => ({ ...state, scanCharacters: network.characters })),

  on(BotActions.getAllCharacters, (state) => ({ ...state, pending: true })),
  on(BotActions.getAllCharactersSuccess, (state, { characters }) => ({ ...state, allCharacters: characters, pending: false })),
  on(BotActions.getAllCharactersFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(BotActions.createGroup, (state) => ({ ...state, pending: true })),
  on(BotActions.createGroupSuccess, (state, { group }) => ({ ...state, group: group, pending: false })),
  on(BotActions.createGroupFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(BotActions.updateCharacterFKGroup, (state, { fk_group, key }) => ({ ...state, scanCharacters: [{ ...state.scanCharacters.find(c => c.key === key), fK_Group: fk_group }], pending: false })),

  on(BotActions.getAllGroups, (state) => ({ ...state, pending: true })),
  on(BotActions.getAllGroupsSuccess, (state, { groups }) => ({ ...state, allGroups: groups, pending: false })),
  on(BotActions.getAllGroupsFailure, (state, { error }) => ({ ...state, error, pending: false })),


)


export const getLogs = (state: State) => state.logs;
export const getScanCharacters = (state: State) => state.scanCharacters;
export const getAccount = (state: State) => state.account;
export const getAllCharacters = (State: State) => State.allCharacters;
export const getAllGroups = (State: State) => State.allGroups;
