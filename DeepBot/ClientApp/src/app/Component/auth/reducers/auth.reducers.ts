import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';
import { Account } from '../models/account';

export interface State {
    user: Account | null;
    error: string | null,
    pending: boolean,
}

export const initialState: State = {
    user: null,
    error: null,
    pending: false,
}


export const reducer = createReducer(initialState,

    on(AuthActions.login, (state) => ({ ...state, pending: true })),
    on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, pending: false })),
    on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error, pending: false })),
    on(AuthActions.getUser, (state) => ({ ...state, pending: true })),
    on(AuthActions.getUserSuccess, (state, { user }) => ({ ...state, user, pending: false }))
)


export const getUser = (state:State) => state.user;
export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;