import { props, createAction } from '@ngrx/store';
import { Path, PathMinDisplayed } from '../../../../webModel/Utility/PathCreator/Path';


export const createPath = createAction('[BOT/GROUP] CREATE PATH', props<{ createdPath: any }>());
export const createPathSuccess = createAction('[BOT/GROUP] CREATE PATH SUCCESS', props<{ createdPath: any }>());
export const createPathFailure = createAction('[BOT/GROUP] CREATE PATH ERROR', props<{ error: any }>());

export const addOnAllPaths = createAction('[BOT/PATH] ADD NEW PATH', props<{ path: PathMinDisplayed }>());

export const getAllPaths = createAction('[BOT/PATH] GET ALLPATH');
export const getAllPathsSuccess = createAction('[BOT/PATH] GET ALLPATH SUCCESS', props<{ allPaths: PathMinDisplayed[] }>());
export const getAllPathsFailure = createAction('[BOT/PATH] GET ALLPATH ERROR', props<{ error: any }>());
