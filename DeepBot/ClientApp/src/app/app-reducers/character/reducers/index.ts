import {
    createSelector,
    createFeatureSelector,
    Action,
    combineReducers,
} from '@ngrx/store';
import * as fromCharacter from '../reducers/character.reducers';

export interface CharacterState {
  status: fromCharacter.State
}

export interface State {
  character: CharacterState
}

export function reducers(state: CharacterState | undefined, action: Action) {
  return combineReducers({ status: fromCharacter.reducer })(state, action);
}

export const selectCharacterState = createFeatureSelector<State, CharacterState>('character');
export const selectCharacterStatusState = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.status
);

export const getScanCharacters = createSelector(selectCharacterStatusState, fromCharacter.getScanCharacters);
export const getKamas = createSelector(selectCharacterStatusState, fromCharacter.getKamas);
export const getCharacteristicsPoints = createSelector(selectCharacterStatusState, fromCharacter.getCharacteristicsPoints);
export const getCharacteristics = createSelector(selectCharacterStatusState, fromCharacter.getCharacteristics);
export const getAllCharacters = createSelector(selectCharacterStatusState, fromCharacter.getAllCharacters);
export const getAllCurrentCharacters = createSelector(selectCharacterStatusState, fromCharacter.getAllCurrentCharacters);
export const getCurrentCharacter = createSelector(selectCharacterStatusState, fromCharacter.getCurrrentUser);
export const getCurrentlogs = createSelector(selectCharacterStatusState, fromCharacter.getLogsUser);
