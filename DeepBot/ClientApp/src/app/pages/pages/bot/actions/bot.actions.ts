import { props, createAction } from '@ngrx/store';
import { LogMessage } from 'src/webModel/LogMessage';

export const receveidLogs = createAction('[BOT/TALK] SEND LOG', props<{network: LogMessage}>());