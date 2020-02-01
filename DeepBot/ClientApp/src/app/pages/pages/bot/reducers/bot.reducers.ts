import { createReducer, on } from '@ngrx/store';
import { BotActions } from '../actions';
import { LogMessage } from 'src/webModel/LogMessage';

export interface State {
    logs: LogMessage[] ;
}

export const initialState: State = {
    logs: [],
}


export const reducer = createReducer(initialState,
    on(BotActions.receveidLogs, (state, { network }) => ({ ...state, logs: state.logs.concat(network) })),
)


export const getLogs = (state: State) => state.logs;