import { createReducer, on } from '@ngrx/store';
import { GroupActions } from '../actions';
import { User } from '../../../../webModel/User';
import { Group } from '../../../../webModel/Group';

export interface State {
  allGroups: Group[],
  createdGroup: Group | null,
  error: string | null,
  pending: boolean,
}

export const initialState: State = {
  allGroups: [],
  createdGroup: null,
  error: null,
  pending: false,
}


export const reducer = createReducer(initialState,

  on(GroupActions.createGroup, (state) => ({ ...state, pending: true })),
  on(GroupActions.createGroupSuccess, (state, { createdGroup }) => ({ ...state, group: createdGroup, pending: false })),
  on(GroupActions.createGroupFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(GroupActions.getAllGroups, (state) => ({ ...state, pending: true })),
  on(GroupActions.getAllGroupsSuccess, (state, { groups }) => ({ ...state, allGroups: groups, pending: false })),
  on(GroupActions.getAllGroupsFailure, (state, { error }) => ({ ...state, error, pending: false })),


  on(GroupActions.updateGroup, (state) => ({ ...state, pending: true })),
  on(GroupActions.updateGroupSuccess, (state, { groupToUpdate }) => ({ ...state, pending: false })),
  on(GroupActions.updateGroupFailure, (state, { error }) => ({ ...state, error, pending: false })),


  on(GroupActions.deleteGroup, (state) => ({ ...state, pending: true })),
  on(GroupActions.deleteGroupSuccess, (state, { name }) => ({ ...state, pending: false })),
  on(GroupActions.deleteGroupFailure, (state, { error }) => ({ ...state, error, pending: false })),


  on(GroupActions.updateGroupConfig, (state) => ({ ...state, pending: true })),
  on(GroupActions.updateGroupConfigSuccess, (state, { groupConfigToUpdate }) => ({ ...state, pending: false })),
  on(GroupActions.updateGroupConfigFailure, (state, { error }) => ({ ...state, error, pending: false })),
)


export const getAllGroups = (State: State) => State.allGroups;

