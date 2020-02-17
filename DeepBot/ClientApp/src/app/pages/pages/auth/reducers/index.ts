import {
    createSelector,
    createFeatureSelector,
    Action,
    combineReducers,
} from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducers';

export interface AuthState {
    status: fromAuth.State;
}

export interface State {
    auth: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
    return combineReducers({ status: fromAuth.reducer })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');
export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state: AuthState) => state.status
);

export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);
export const getError = createSelector(selectAuthStatusState, fromAuth.getError);
export const getPending = createSelector(selectAuthStatusState, fromAuth.getPending);
export const getUserConnected = createSelector(selectAuthStatusState, fromAuth.getUserConnected);


