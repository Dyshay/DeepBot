import { props, createAction } from '@ngrx/store';
import { Account } from '../models/account';
import { User } from 'src/webModel/UserModel';

export const loginSuccess = createAction('[AUTH/LOGIN] Login Success', props<{user: any}>());
export const login = createAction('[AUTH/LOGIN] Login', props<{user: User}>());
export const loginFailure = createAction('[AUTH/LOGIN] Login Failure', props<{error: any}>());

export const getUser = createAction('[AUTH] GET USER')
export const getUserSuccess = createAction('[AUTH] GET USER SUCCESS', props<{account: Account}>());