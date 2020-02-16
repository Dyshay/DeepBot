import {
    createSelector,
    createFeatureSelector,
    Action,
    combineReducers,
} from '@ngrx/store';
import * as fromBot from '../reducers/bot.reducers';

export interface BotState {
    botStatus: fromBot.State;
}

export interface State {
    bot: BotState;
}

export function reducers(state: BotState | undefined, action: Action) {
    return combineReducers({ botStatus: fromBot.reducer })(state, action);
}

export const selectBotState = createFeatureSelector<State, BotState>('bot');
export const selectBotStatusState = createSelector(
    selectBotState,
    (state: BotState) => state.botStatus
);

export const getLogs = createSelector(selectBotStatusState, fromBot.getLogs);
export const getScanCharacters = createSelector(selectBotStatusState, fromBot.getScanCharacters);
export const getAllCharacters = createSelector(selectBotStatusState, fromBot.getAllCharacters);
export const getAllGroups = createSelector(selectBotStatusState, fromBot.getAllGroups);
