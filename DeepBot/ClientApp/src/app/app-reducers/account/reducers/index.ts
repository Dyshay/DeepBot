import {
    createSelector,
    createFeatureSelector,
    Action,
    combineReducers,
} from '@ngrx/store';
import * as fromAccount from '../reducers/account.reducers';

export interface AccountState {
  accountStatus: fromAccount.State;
}

export interface State {
  account: AccountState;
}

export function reducers(state: AccountState | undefined, action: Action) {
  return combineReducers({ accountStatus: fromAccount.reducer })(state, action);
}

export const selectAccountState = createFeatureSelector<State, AccountState>('account');
export const selectAccountStatusState = createSelector(
    selectAccountState,
  (state: AccountState) => state.accountStatus
);


export const getAccountCreated = createSelector(selectAccountStatusState, fromAccount.getAccountCreated);

