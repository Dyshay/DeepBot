import { props, createAction } from '@ngrx/store';
import { LogMessage } from 'src/webModel/LogMessage';

export const receveidLogs = createAction('[AUTH/LOGIN] Login Success', props<{logs: LogMessage}>());