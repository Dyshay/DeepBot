import {
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
  Action,
  combineReducers,
  ActionReducerMap,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import * as fromWebUser from 'src/app/app-reducers/webUser/reducers';
import * as fromAccount from 'src/app/app-reducers/account/reducers';
import * as fromGroup from 'src/app/app-reducers/group/reducers';
import * as fromCharacter from 'src/app/app-reducers/character/reducers'
import * as fromPath from 'src/app/app-reducers/path/reducers'
/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import { InjectionToken } from '@angular/core';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  router: fromRouter.RouterReducerState<any>,
  webUser: fromWebUser.webUserState,
  account: fromAccount.AccountState,
  group: fromGroup.groupState,
  character: fromCharacter.CharacterState,
  path:fromPath.pathState
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    router: fromRouter.routerReducer,
    webUser: fromWebUser.reducers,
    account: fromAccount.reducers,
    character: fromCharacter.reducers,
    group: fromGroup.reducers,
    path:fromPath.reducers
  }),
});

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
