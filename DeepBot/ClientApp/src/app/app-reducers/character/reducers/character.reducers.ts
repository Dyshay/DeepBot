import { createReducer, on } from '@ngrx/store';
import { CharacterActions } from '../actions';
import { Character } from 'src/webModel/Character';

export interface State {
  scanCharacters: Character[],
  allCharacters: Character[],
  allCurrentCharacters: Character[],
  error: string | null,
  pending: boolean
}

export const initialState: State = {
  scanCharacters: [],
  allCharacters: [],
  allCurrentCharacters:[],
  error: null,
  pending: false
}


export const reducer = createReducer(initialState,


  on(CharacterActions.receveidCharacters, (state, { network }) => ({ ...state, scanCharacters: network.characters })),
  on(CharacterActions.resetReceveidCharacters, (state) => ({ ...state, scanCharacters: [] })),

  on(CharacterActions.getAllCharacters, (state, { allCharacters}) => ({ ...state, allCharacters:allCharacters, pending: false })),
  on(CharacterActions.getAllCurrentCharacters, (state, { allCurrentCharacters }) => ({ ...state, allCurrentCharacters: allCurrentCharacters, pending: false })),

  on(CharacterActions.updateCharacterFKGroup, (state, { fk_Group, key }) => ({ ...state, scanCharacters: [{ ...state.scanCharacters.find(c => c.key === key), fk_Group: fk_Group }], pending: false })),


  on(CharacterActions.updateCharacterConfig, (state) => ({ ...state, pending: true })),
  on(CharacterActions.updateCharacterConfigSuccess, (state, { characterConfigToUpdate }) => ({ ...state, pending: false })),
  on(CharacterActions.updateCharacterConfigFailure, (state, { error }) => ({ ...state, error, pending: false })),


)

export const getScanCharacters = (state: State) => state.scanCharacters;
export const getAllCharacters = (State: State) => State.allCharacters;
export const getAllCurrentCharacters = (State: State) => State.allCurrentCharacters;
