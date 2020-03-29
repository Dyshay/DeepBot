import { createReducer, on } from '@ngrx/store';
import { IaActions } from '../actions';
import { IA } from '../../../../webModel/IA';

export interface State {
  createdIa: IA | null,
  allIas: IA[] | null,
  updateIa: IA | null,
  updatedIa: IA | null,
  error: string | null,
  pending: boolean,
}

export const initialState: State = {
  createdIa: null,
  updateIa: null,
  updatedIa:null,
  allIas: null,
  error: null,
  pending: false,
}


export const reducer = createReducer(initialState,

  on(IaActions.createIa, (state) => ({ ...state, pending: true })),
  on(IaActions.createIaSuccess, (state, { createdIa }) => ({ ...state, createdIa: createdIa, pending: false })),
  on(IaActions.createIaFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(IaActions.addOnAllIA, (state, { ia }) => ({ ...state, allIa: state.allIas.concat(ia) })),

  on(IaActions.getAllIAs, (state) => ({ ...state, pending: true })),
  on(IaActions.getAllIAsSuccess, (state, { allIas }) => ({ ...state, allIas: allIas, pending: false })),
  on(IaActions.getAllIAsFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(IaActions.updateIa, (state) => ({ ...state, pending: true })),
  on(IaActions.updateIaSuccess, (state, { updatedIa }) => ({ ...state, updatedIa: updatedIa, pending: false })),
  on(IaActions.updateIaFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(IaActions.deleteIa, (state) => ({ ...state, pending: true })),
  on(IaActions.deleteIaSuccess, (state, { name }) => ({ ...state, pending: false })),
  on(IaActions.deleteIaFailure, (state, { error }) => ({ ...state, error, pending: false })),


)


export const getAllIa = (state: State) => state.allIas;
