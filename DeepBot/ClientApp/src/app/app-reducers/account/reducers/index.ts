import {
    createSelector,
    createFeatureSelector,
    Action,
    combineReducers,
} from '@ngrx/store';
import * as fromAccount from '../reducers/account.reducers';

export interface AccountState {
  status: fromAccount.State;
}

export interface State {
  account: AccountState;
}

export function reducers(state: AccountState | undefined, action: Action) {
  return combineReducers({ status: fromAccount.reducer })(state, action);
}

export const selectAccountState = createFeatureSelector<State, AccountState>('account');
export const selectAccountStatusState = createSelector(
    selectAccountState,
  (state: AccountState) => state.status
);


export const getAccountCreated = createSelector(selectAccountStatusState, fromAccount.getAccountCreated);
export const getAllAccounts = createSelector(selectAccountStatusState, fromAccount.getAllAccounts);
export const getLogs = createSelector(selectAccountStatusState, fromAccount.getLogs);
