import { createReducer, on } from '@ngrx/store';
import { CharacterActions } from '../actions';
import { Character } from 'src/webModel/Character';

export interface State {
  scanCharacters: Character[];
  allCharacters: Character[],
  error: string | null;
  pending: boolean,
}

export const initialState: State = {
  scanCharacters: [],
  allCharacters: [],
  error: null,
  pending: false
}


export const reducer = createReducer(initialState,


  on(CharacterActions.receveidCharacters, (state, { network }) => ({ ...state, scanCharacters: network.characters })),

  on(CharacterActions.getAllCharacters, (state) => ({ ...state, pending: true })),
  on(CharacterActions.getAllCharactersSuccess, (state, { characters }) => ({ ...state, allCharacters: characters, pending: false })),
  on(CharacterActions.getAllCharactersFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(CharacterActions.updateCharacterFKGroup, (state, { fk_group, key }) => ({ ...state, scanCharacters: [{ ...state.scanCharacters.find(c => c.key === key), fK_Group: fk_group }], pending: false })),


)

export const getScanCharacters = (state: State) => state.scanCharacters;
export const getAllCharacters = (State: State) => State.allCharacters;
