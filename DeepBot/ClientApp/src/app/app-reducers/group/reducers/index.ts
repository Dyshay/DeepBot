import {
    createSelector,
    createFeatureSelector,
    Action,
    combineReducers,
} from '@ngrx/store';
import * as fromgroup from '../reducers/group.reducers';

export interface groupState {
  status: fromgroup.State
}

export interface State {
  group: groupState
}

export function reducers(state: groupState | undefined, action: Action) {
  return combineReducers({ status: fromgroup.reducer })(state, action);
}

export const selectGroupState = createFeatureSelector<State, groupState>('group');
export const selectGroupStatusState = createSelector(
  selectGroupState,
  (state: groupState) => state.status
);

export const getAllGroups = createSelector(selectGroupStatusState, fromgroup.getAllGroups);


