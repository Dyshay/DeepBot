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
  webUser: webUserState;
}

export function reducers(state: webUserState | undefined, action: Action) {
  return combineReducers({ status: fromwebUser.reducer })(state, action);
}

export const selectwebUserState = createFeatureSelector<State, webUserState>('webUser');
export const selectwebUserStatusState = createSelector(
  selectwebUserState,
  (state: webUserState) => state.status
);

export const getUser = createSelector(selectwebUserStatusState, fromwebUser.getUser);
export const getError = createSelector(selectwebUserStatusState, fromwebUser.getError);
export const getPending = createSelector(selectwebUserStatusState, fromwebUser.getPending);

export const getLogs = createSelector(selectwebUserStatusState, fromwebUser.getLogs);


