import {
    createSelector,
    createFeatureSelector,
    Action,
    combineReducers,
} from '@ngrx/store';
import * as fromia from '../reducers/ia.reducers';

export interface iaState {
  status: fromia.State
}

export interface State {
  ia: iaState
}

export function reducers(state: iaState | undefined, action: Action) {
  return combineReducers({ status: fromia.reducer })(state, action);
}

export const selectIaState = createFeatureSelector<State, iaState>('ia');
export const selectIaStatusState = createSelector(
  selectIaState,
  (state: iaState) => state.status
);


export const getAllIa = createSelector(selectIaStatusState, fromia.getAllIa);
