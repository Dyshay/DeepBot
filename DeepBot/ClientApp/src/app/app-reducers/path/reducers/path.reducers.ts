import { createReducer, on } from '@ngrx/store';
import { PathActions } from '../actions';
import { Path } from '../../../../webModel/Utility/PathCreator/Path';

export interface State {
  createdGroup: Path | null,
  error: string | null,
  pending: boolean,
}

export const initialState: State = {
  createdGroup: null,
  error: null,
  pending: false,
}


export const reducer = createReducer(initialState,

  on(PathActions.createPath, (state) => ({ ...state, pending: true })),
  on(PathActions.createPathSuccess, (state, { createdPath }) => ({ ...state, path: createdPath, pending: false })),
  on(PathActions.createPathFailure, (state, { error }) => ({ ...state, error, pending: false })),
)


