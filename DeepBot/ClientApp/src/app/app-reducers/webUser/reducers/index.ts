import {
    createSelector,
    createFeatureSelector,
    Action,
    combineReducers,
} from '@ngrx/store';
import * as fromwebUser from '../reducers/webUser.reducers';

export interface webUserState {
  status: fromwebUser.State;
}

export interface State {
  auth: webUserState;
}

export function reducers(state: webUserState | undefined, action: Action) {
  return combineReducers({ status: fromwebUser.reducer })(state, action);
}

export const selectAuthState = createFeatureSelector<State, webUserState>('auth');
export const selectAuthStatusState = createSelector(
    selectAuthState,
  (state: webUserState) => state.status
);

export const getUser = createSelector(selectAuthStatusState, fromwebUser.getUser);
export const getError = createSelector(selectAuthStatusState, fromwebUser.getError);
export const getPending = createSelector(selectAuthStatusState, fromwebUser.getPending);


