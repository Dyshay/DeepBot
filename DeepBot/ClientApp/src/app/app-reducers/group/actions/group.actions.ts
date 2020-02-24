import { props, createAction } from '@ngrx/store';
import { User } from '../../../../webModel/User';
import { Group } from '../../../../webModel/Group';


export const createGroup = createAction('[BOT/GROUP] CREATE GROUP', props<{ createdGroup: Group }>());
export const createGroupSuccess = createAction('[BOT/GROUP] CREATE GROUP SUCCESS', props<{ createdGroup: Group }>());
export const createGroupFailure = createAction('[BOT/GROUP] CREATE GROUP ERROR', props<{ error: any }>());

export const getAllGroups = createAction('[BOT/CHARACTER] GET ALLGROUP')
export const getAllGroupsSuccess = createAction('[BOT/CHARACTER] GET ALLGROUP SUCCESS', props<{ groups: Group[] }>());
export const getAllGroupsFailure = createAction('[BOT/CHARACTER] GET ALLGROUP ERROR', props<{ error: any }>());

export const updateGroup = createAction('[BOT/ACCOUNT] UPDATE  GROUP', props<{ groupToUpdate: Group }>());
export const updateGroupSuccess = createAction('[BOT/ACCOUNT] UPDATE GROUP SUCCESS', props<{ groupToUpdate: Group }>());
export const updateGroupFailure = createAction('[BOT/ACCOUNT] UPDATE GROUP ERROR', props<{ error: any }>());


export const deleteGroup = createAction('[BOT/ACCOUNT] DELETE  GROUP', props<{ groupKeyToDelete: string }>());
export const deleteGroupSuccess = createAction('[BOT/ACCOUNT] DELETE GROUP SUCCESS', props<{ name: string }>());
export const deleteGroupFailure = createAction('[BOT/ACCOUNT] DELETE GROUP ERROR', props<{ error: any }>());
