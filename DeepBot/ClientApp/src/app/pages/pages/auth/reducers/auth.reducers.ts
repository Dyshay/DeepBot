import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';
import { Account } from '../../../../../webModel/Account';
import { User } from '../../../../../webModel/User';


export interface State {
  account: Account | null,
  userConnected: User | null,
  error: string | null,
  pending: boolean,
}

export const initialState: State = {
  account: null,
  userConnected: null,
  error: null,
  pending: false,
}


export const reducer = createReducer(initialState,

  on(AuthActions.login, (state) => ({ ...state, pending: true })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, pending: false })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(AuthActions.getUser, (state) => ({ ...state, pending: true })),
  on(AuthActions.getUserSuccess, (state, { account }) => ({ ...state, account, pending: false })),

  on(AuthActions.getUserConnected, (state) => ({ ...state, pending: true })),
  on(AuthActions.getUserConnectedSuccess, (state, { userConnected }) => ({ ...state, userConnected , pending: false })),
  on(AuthActions.getUserConnectedFailure, (state, { error }) => ({ ...state, error, pending: false })),
)


export const getUser = (state: State) => state.account;
export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
export const getUserConnected = (state: State) => state.userConnected;
