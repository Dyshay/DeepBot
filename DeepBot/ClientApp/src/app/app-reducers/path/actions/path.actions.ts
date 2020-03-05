import { props, createAction } from '@ngrx/store';
import { Path } from '../../../../webModel/Utility/PathCreator/Path';


export const createPath = createAction('[BOT/GROUP] CREATE PATH', props<{ createdPath: any }>());
export const createPathSuccess = createAction('[BOT/GROUP] CREATE PATH SUCCESS', props<{ createdPath: Path }>());
export const createPathFailure = createAction('[BOT/GROUP] CREATE PATH ERROR', props<{ error: any }>());


