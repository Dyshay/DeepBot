import { props, createAction } from '@ngrx/store';
import { User } from '../../../../webModel/User';
import { LogMessage } from '../../../../webModel/LogMessage';

export const loginSuccess = createAction('[AUTH/LOGIN] Login Success', props<{user: any}>());
export const login = createAction('[AUTH/LOGIN] Login', props<{user: User}>());
export const loginFailure = createAction('[AUTH/LOGIN] Login Failure', props<{error: any}>());

export const getUser = createAction('[AUTH] GET USER')
export const getUserSuccess = createAction('[AUTH] GET USER SUCCESS', props<{user: User}>());
export const getUserFailure = createAction('[AUTH] GET USER FAILURE', props<{ error: any }>());

export const DEBUG = createAction('[DEBUG/STORE] DEBUG');