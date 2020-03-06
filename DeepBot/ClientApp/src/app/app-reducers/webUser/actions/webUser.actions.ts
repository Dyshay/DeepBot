import { props, createAction } from '@ngrx/store';
import { User } from '../../../../webModel/User';
import { LogMessage } from '../../../../webModel/LogMessage';
import { SideNav } from 'src/webModel/Utility/SideNav';

export const loginSuccess = createAction('[AUTH/LOGIN] Login Success', props<{user: any}>());
export const login = createAction('[AUTH/LOGIN] Login', props<{user: User}>());
export const loginFailure = createAction('[AUTH/LOGIN] Login Failure', props<{error: any}>());

export const getUser = createAction('[AUTH] GET USER')
export const getUserSuccess = createAction('[AUTH] GET USER SUCCESS', props<{user: User}>());
export const getUserFailure = createAction('[AUTH] GET USER FAILURE', props<{ error: any }>());

export const getBotNav = createAction('[BOT/NAV] GET BOTS NAV');
export const getBotNavSuccess = createAction('[BOT/NAV] GET BOT NAV SUCCESS', props<{sideNav: SideNav }>());
export const getBotNavFailure = createAction('[BOT/NAV] GET BOT NAV FAILURE', props<{error: any}>());

export const getConnectedBot = createAction('[BOT/STATUS] GET CONNECTED BOT', props<{ids: string[]}>());

export const DEBUG = createAction('[DEBUG/STORE] DEBUG');
