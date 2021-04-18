import { props, createAction } from '@ngrx/store';
import { Path, PathMinDisplayed } from '../../../../webModel/Utility/PathCreator/Path';


export const createPath = createAction('[BOT/GROUP] CREATE PATH', props<{ createdPath: any }>());
export const createPathSuccess = createAction('[BOT/GROUP] CREATE PATH SUCCESS', props<{ createdPath: any }>());
export const createPathFailure = createAction('[BOT/GROUP] CREATE PATH ERROR', props<{ error: any }>());

export const updatePath = createAction('[BOT/GROUP] UPDATE PATH', props<{ updatedPath: any }>());
export const updatePathSuccess = createAction('[BOT/GROUP] UPDATE PATH SUCCESS', props<{ updatedPath: any }>());
export const updatePathFailure = createAction('[BOT/GROUP] UPDATE PATH ERROR', props<{ error: any }>());

export const addOnAllPaths = createAction('[BOT/PATH] ADD NEW PATH', props<{ path: PathMinDisplayed }>());

export const getAllPaths = createAction('[BOT/PATH] GET ALLPATH');
export const getAllPathsSuccess = createAction('[BOT/PATH] GET ALLPATH SUCCESS', props<{ allPaths: PathMinDisplayed[] }>());
export const getAllPathsFailure = createAction('[BOT/PATH] GET ALLPATH ERROR', props<{ error: any }>());

export const getPathByKey = createAction('[AUTH] GET PATH', props<{ keyPath: any }>())
export const getPathByKeySuccess = createAction('[AUTH] GET PATH SUCCESS', props<{ updatePath: Path }>());
export const getPathByKeyFailure = createAction('[AUTH] GET PATH FAILURE', props<{ error: any }>());


export const deletePath = createAction('[BOT/ACCOUNT] DELETE  PATH', props<{ pathKeyToDelete: string }>());
export const deletePathSuccess = createAction('[BOT/ACCOUNT] DELETE PATH SUCCESS', props<{ name: string }>());
export const deletePathFailure = createAction('[BOT/ACCOUNT] DELETE PATH ERROR', props<{ error: any }>());
