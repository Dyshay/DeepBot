import {
    createSelector,
    createFeatureSelector,
    Action,
    combineReducers,
} from '@ngrx/store';
import * as frompath from '../reducers/path.reducers';

export interface pathState {
  status: frompath.State
}

export interface State {
  path: pathState
}

export function reducers(state: pathState | undefined, action: Action) {
  return combineReducers({ status: frompath.reducer })(state, action);
}

export const selectPathState = createFeatureSelector<State, pathState>('path');
export const selectPathStatusState = createSelector(
  selectPathState,
  (state: pathState) => state.status
);



