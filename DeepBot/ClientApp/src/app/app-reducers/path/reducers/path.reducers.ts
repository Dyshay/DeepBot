import { createReducer, on } from '@ngrx/store';
import { PathActions } from '../actions';
import { Path, PathMinDisplayed } from '../../../../webModel/Utility/PathCreator/Path';

export interface State {
  createdPath: PathMinDisplayed | null,
  allPaths: PathMinDisplayed[] | null,
  error: string | null,
  pending: boolean,
}

export const initialState: State = {
  createdPath: null,
  allPaths: null,
  error: null,
  pending: false,
}


export const reducer = createReducer(initialState,

  on(PathActions.createPath, (state) => ({ ...state, pending: true })),
  on(PathActions.createPathSuccess, (state, { createdPath }) => ({ ...state, createdPath: createdPath, pending: false })),
  on(PathActions.createPathFailure, (state, { error }) => ({ ...state, error, pending: false })),
  on(PathActions.getAllPaths, (state) => ({ ...state, pending: true })),
  on(PathActions.getAllPathsSuccess, (state, { allPaths }) => ({ ...state, allPaths: allPaths, pending: false })),
  on(PathActions.getAllPathsFailure, (state, { error }) => ({ ...state, error, pending: false })),
  on(PathActions.addOnAllPaths, (state, { path }) => ({ ...state, allPaths: state.allPaths.concat(path) }))

)


