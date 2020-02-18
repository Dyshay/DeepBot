import { createReducer, on } from '@ngrx/store';
import { webUserActions } from '../actions';
import { User } from '../../../../webModel/User';
import { LogMessage } from '../../../../webModel/LogMessage';

export interface State {
  logs: LogMessage[];
  user: User | null,
  error: string | null,
  pending: boolean,
}

export const initialState: State = {
  logs: [],
  user: null,
  error: null,
  pending: false,
}


export const reducer = createReducer(initialState,
  on(webUserActions.receveidLogs, (state, { network }) => ({ ...state, logs: state.logs.concat(network) })),


  on(webUserActions.login, (state) => ({ ...state, pending: true })),
  on(webUserActions.loginSuccess, (state, { user }) => ({ ...state, user, pending: false })),
  on(webUserActions.loginFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(webUserActions.getUser, (state) => ({ ...state, pending: true })),
  on(webUserActions.getUserSuccess, (state, { user }) => ({ ...state, user , pending: false })),
  on(webUserActions.getUserFailure, (state, { error }) => ({ ...state, error, pending: false })),
)

export const getLogs = (state: State) => state.logs;
export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
export const getUser = (state: State) => state.user;
