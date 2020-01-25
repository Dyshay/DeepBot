import { props, createAction } from '@ngrx/store';
import { Account } from '../models/account';
import { User } from 'src/webModel/UserModel';

export const loginSuccess = createAction('[AUTH/LOGIN] Login Success', props<{user: Account}>());
export const login = createAction('[AUTH/LOGIN] Login', props<{user: User}>());
export const loginFailure = createAction('[AUTH/LOGIN] Login Failure', props<{error: any}>());