import { createReducer, on } from '@ngrx/store';
import { CharacterActions } from '../actions';
import { Character } from 'src/webModel/Character';
import { CharacteristicsMessage } from 'src/webModel/CharacteristicsMessage';
import { Caracteristic } from 'src/webModel/Caracteristic';

export interface State {
  scanCharacters: Character[],
  allCharacters: Character[],
  allCurrentCharacters: Character[],
  error: string | null,
  kamas: number,
  pending: boolean,
  characteristics: Caracteristic,
  characteristicsPoints: number,
}

export const initialState: State = {
  scanCharacters: [],
  allCharacters: [],
  allCurrentCharacters: [],
  characteristics: {
    agility: { total: 0 },
    strength: { total: 0 },
    pa: { total: 0 },
    pm: { total: 0 },
    range: { total: 0 },
    luck: { total: 0 },
    experienceLevelUp: 0,
    experienceActual: 0,
    energyActual: 0,
    energyMax: 0,
    experienceMinLevel: 0,
    wisdom: { total: 0 },
    vitality: { total: 0 },
    vitalityActual: 0,
    vitalityMax: 0,
    initiative: { total: 0 },
    intelligence: { total: 0 },
    invocablesCreatures: { total: 0 },
    prospection: { total: 0 },
  },
  kamas: 0,
  characteristicsPoints: 0,
  error: null,
  pending: false
}


export const reducer = createReducer(initialState,


  on(CharacterActions.receveidCharacters, (state, { network }) => ({ ...state, scanCharacters: network.characters })),
  on(CharacterActions.receivedCharacteristic, (state, { network }) => ({ ...state, characteristics: network.characteristic, kamas: network.kamas, characteristicsPoints: network.characteristicsPoints })),
  on(CharacterActions.resetReceveidCharacters, (state) => ({ ...state, scanCharacters: [] })),

  on(CharacterActions.getAllCharacters, (state, { allCharacters }) => ({ ...state, allCharacters: allCharacters, pending: false })),
  on(CharacterActions.getAllCurrentCharacters, (state, { allCurrentCharacters }) => ({ ...state, allCurrentCharacters: allCurrentCharacters, pending: false })),

  on(CharacterActions.updateCharacterFKGroup, (state, { fk_Group, key }) => ({ ...state, scanCharacters: [{ ...state.scanCharacters.find(c => c.key === key), fk_Group: fk_Group }], pending: false })),


  on(CharacterActions.updateCharacterConfig, (state) => ({ ...state, pending: true })),
  on(CharacterActions.updateCharacterConfigSuccess, (state, { characterConfigToUpdate }) => ({ ...state, pending: false })),
  on(CharacterActions.updateCharacterConfigFailure, (state, { error }) => ({ ...state, error, pending: false })),
  on(CharacterActions.addOnCurrentCharacter, (state, {currentCharacter}) => ({...state, allCurrentCharacters: state.allCurrentCharacters.concat(currentCharacter)}))


)

export const getScanCharacters = (state: State) => state.scanCharacters;
export const getKamas = (state: State) => state.kamas;
export const getCharacteristicsPoints = (state: State) => state.characteristicsPoints;
export const getCharacteristics = (state: State) => state.characteristics;
export const getAllCharacters = (State: State) => State.allCharacters;
export const getAllCurrentCharacters = (State: State) => State.allCurrentCharacters;
