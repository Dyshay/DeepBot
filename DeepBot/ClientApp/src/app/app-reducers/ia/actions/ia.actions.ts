import { props, createAction } from '@ngrx/store';
import { IA } from '../../../../webModel/IA';


export const createIa = createAction('[BOT/IA] CREATE IA', props<{ createdIa: any }>());
export const createIaSuccess = createAction('[BOT/IA] CREATE IA SUCCESS', props<{ createdIa: any }>());
export const createIaFailure = createAction('[BOT/IA] CREATE IA ERROR', props<{ error: any }>());

export const addOnAllIA = createAction('[BOT/IA] ADD NEW IA', props<{ ia: IA }>());

export const getAllIAs = createAction('[BOT/PATH] GET ALL IA');
export const getAllIAsSuccess = createAction('[BOT/PATH] GET  ALL IA SUCCESS', props<{ allIas: IA[] }>());
export const getAllIAsFailure = createAction('[BOT/PATH] GET  ALL IA ERROR', props<{ error: any }>());


export const updateIa = createAction('[BOT/GROUP] UPDATE IA', props<{ updatedIa: any }>());
export const updateIaSuccess = createAction('[BOT/GROUP] UPDATE IA SUCCESS', props<{ updatedIa: any }>());
export const updateIaFailure = createAction('[BOT/GROUP] UPDATE IA ERROR', props<{ error: any }>());

export const deleteIa = createAction('[BOT/ACCOUNT] DELETE  IA', props<{ iaKeyToDelete: string }>());
export const deleteIaSuccess = createAction('[BOT/ACCOUNT] DELETE IA SUCCESS', props<{ name: string }>());
export const deleteIaFailure = createAction('[BOT/ACCOUNT] DELETE IA ERROR', props<{ error: any }>());
