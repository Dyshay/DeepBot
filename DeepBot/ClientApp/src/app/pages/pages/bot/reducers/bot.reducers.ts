import { createReducer, on } from '@ngrx/store';
import { BotActions } from '../actions';
import { LogMessage } from 'src/webModel/LogMessage';

export interface State {
    logs: LogMessage[] | null;
}

export const initialState: State = {
    logs: null,
}


export const reducer = createReducer(initialState,
    on(BotActions.receveidLogs, (state, { logs }) => ({ ...state, logs: state.logs.concat(logs) })),
)


export const getLogs = (state: State) => state.logs;