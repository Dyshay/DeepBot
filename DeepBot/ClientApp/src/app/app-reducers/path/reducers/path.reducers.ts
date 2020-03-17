import { createReducer, on } from '@ngrx/store';
import { PathActions } from '../actions';
import { Path, PathMinDisplayed } from '../../../../webModel/Utility/PathCreator/Path';

export interface State {
  createdPath: PathMinDisplayed | null,
  allPaths: PathMinDisplayed[] | null,
  updatePath: Path | null,
  updatedPath: Path | null,
  error: string | null,
  pending: boolean,
}

export const initialState: State = {
  createdPath: null,
  updatePath: null,
  updatedPath:null,
  allPaths: null,
  error: null,
  pending: false,
}


export const reducer = createReducer(initialState,

  on(PathActions.createPath, (state) => ({ ...state, pending: true })),
  on(PathActions.createPathSuccess, (state, { createdPath }) => ({ ...state, createdPath: createdPath, pending: false })),
  on(PathActions.createPathFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(PathActions.updatePath, (state) => ({ ...state, pending: true })),
  on(PathActions.updatePathSuccess, (state, { updatedPath }) => ({ ...state, updatedPath: updatedPath, pending: false })),
  on(PathActions.updatePathFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(PathActions.getAllPaths, (state) => ({ ...state, pending: true })),
  on(PathActions.getAllPathsSuccess, (state, { allPaths }) => ({ ...state, allPaths: allPaths, pending: false })),
  on(PathActions.getAllPathsFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(PathActions.addOnAllPaths, (state, { path }) => ({ ...state, allPaths: state.allPaths.concat(path) })),

  on(PathActions.getPathByKey, (state) => ({ ...state, pending: true })),

  on(PathActions.getPathByKeySuccess, (state, { updatePath }) => ({ ...state, updatePath: updatePath, pending: false })),
  on(PathActions.getPathByKeyFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(PathActions.deletePath, (state) => ({ ...state, pending: true })),
  on(PathActions.deletePathSuccess, (state, { name }) => ({ ...state, pending: false })),
  on(PathActions.deletePathFailure, (state, { error }) => ({ ...state, error, pending: false })),


)


export const getAllPaths = (state: State) => state.allPaths;
export const getPathByKey = (state: State) => state.updatePath;
