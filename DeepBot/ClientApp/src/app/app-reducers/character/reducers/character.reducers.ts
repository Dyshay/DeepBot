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

  on(CharacterActions.getAllCharacters, (state, { allCharacters}) => ({ ...state, allCharacters:allCharacters, pending: false })),
  on(CharacterActions.getAllCurrentCharacters, (state, { allCurrentCharacters }) => ({ ...state, allCurrentCharacters: allCurrentCharacters, pending:false})),

  on(CharacterActions.updateCharacterFKGroup, (state, { fk_group, key }) => ({ ...state, scanCharacters: [{ ...state.scanCharacters.find(c => c.key === key), fK_Group: fk_group }], pending: false })),


)

export const getScanCharacters = (state: State) => state.scanCharacters;
export const getAllCharacters = (State: State) => State.allCharacters;
export const getAllCurrentCharacters = (State: State) => State.allCurrentCharacters;
