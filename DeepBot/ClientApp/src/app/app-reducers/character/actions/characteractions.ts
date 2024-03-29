import { props, createAction } from '@ngrx/store';
import { CharacterMessage, Character } from 'src/webModel/Character';
import { ConfigCharacter } from '../../../../webModel/ConfigCharacter';
import { CharacteristicsMessage } from 'src/webModel/CharacteristicsMessage';
import { Caracteristic } from 'src/webModel/Caracteristic';
import { LogMessage } from 'src/webModel/LogMessage';


export const receveidCharacters = createAction('[BOT/TALK] RECEIVE CHARACTERS', props<{ network: CharacterMessage }>());
export const receivedCharacteristic = createAction('[BOT/TALK] RECEIVE CHARACTERISTICS', props<{ network: CharacteristicsMessage }>());
export const resetReceveidCharacters = createAction('[BOT/TALK] RESET RECEIVE CHARACTERS');

export const getAllCharacters = createAction('[BOT/CHARACTER] GET ALLCHARACTERS', props<{ allCharacters: Character[] }>());
export const getAllCurrentCharacters = createAction('[BOT/CHARACTER] GET ALLCURRENTCHARACTERS', props<{ allCurrentCharacters: Character[] }>());

export const updateCharacterFKGroup = createAction('[BOT/CHARACTER] UPDATE FK_GROUP CHARACTER', props<{ fk_Group: string, key: number }>());
export const updateCharacterFKPath = createAction('[BOT/CHARACTER] UPDATE FK_PATH CHARACTER', props<{ fk_Path: string, key: number }>());

export const updateCharacterConfig = createAction('[BOT/ACCOUNT] UPDATE  CHARACTER CONFIG', props<{ characterConfigToUpdate: ConfigCharacter }>());
export const updateCharacterConfigSuccess = createAction('[BOT/ACCOUNT] UPDATE CHARACTER CONFIG SUCCESS', props<{ characterConfigToUpdate: ConfigCharacter }>());
export const updateCharacterConfigFailure = createAction('[BOT/ACCOUNT] UPDATE CHARACTER CONFIG ERROR', props<{ error: any }>());

export const addOnCurrentCharacter = createAction('[BOT/ACCOUNT] ADD NEW CURRENT CHARACTER', props<{currentCharacter: Character}>());

export const ResetCharacteristics = createAction('[BOT/CHARACTER] RESET CHARACTERISTRICS');
export const updateCharacteristics = createAction('[BOT/CHARACTER] UPDATE CHARACTERISTICS', props<{characteristics: Caracteristic}>());
export const updateKamas = createAction('[BOT/CHARACTER] UPDATE KAMAS', props<{kamas: number}>());
export const updatecharacteristicsPoints = createAction('[BOT/CHARACTER] UPDATE characteristicsPoints', props<{characteristicsPoints: number}>());

export const getLogs = createAction('[BOT/LOGS] RECEIVED LOG', props<{logs: LogMessage}>());
export const updateAccountCharacter = createAction('[BOT/UPDATE] UPDATE ACCOUNT', props<{character: Character, tcpId: string}>());

export const updateTcpClient = createAction('[BOT/TCPID] UPDATE THE TCP ID', props<{tcpId: string}>());
export const updateCharacter = createAction('[BOT/CHARACTER] UPDATE CHARACTER', props<{ character: Character, key: number | undefined }>());

export const updateCharacterDB = createAction('[BOT/ACCOUNT] UPDATE  CHARACTER ', props<{ characterToUpdate: Character }>());
export const updateCharacterDBSuccess = createAction('[BOT/ACCOUNT] UPDATE CHARACTER  SUCCESS', props<{ characterToUpdate: Character }>());
export const updateCharacterDBFailure = createAction('[BOT/ACCOUNT] UPDATE CHARACTER  ERROR', props<{ error: any }>());


export const startAndStopBot = createAction('[BOT/ACCOUNT] START/STOP BOT', props<{ key: number }>());
export const startAndStopBotSuccess = createAction('[BOT/ACCOUNT] START/STOP BOT  SUCCESS', props<{ key: number }>());
export const startAndStopBotFailure = createAction('[BOT/ACCOUNT] START/STOP BOT  ERROR', props<{ error: any }>());


