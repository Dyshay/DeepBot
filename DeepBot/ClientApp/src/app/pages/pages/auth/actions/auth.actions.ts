import { props, createAction } from '@ngrx/store';
import { Account } from '../../../../../webModel/Account';
import { User } from '../../../../../webModel/User';


export const loginSuccess = createAction('[AUTH/LOGIN] Login Success', props<{user: any}>());
export const login = createAction('[AUTH/LOGIN] Login', props<{user: User}>());
export const loginFailure = createAction('[AUTH/LOGIN] Login Failure', props<{error: any}>());

export const getUser = createAction('[AUTH] GET ACCOUNT')
export const getUserSuccess = createAction('[AUTH] GET ACCOUNT SUCCESS', props<{account: Account}>());

export const getUserConnected = createAction('[AUTH/USER] GET USER ');
export const getUserConnectedSuccess = createAction('[AUTH/USER] GET USER SUCCESS', props<{userConnected: User }>());
export const getUserConnectedFailure = createAction('[AUTH/USER] GET USER FAILURE', props<{ error: any }>());
