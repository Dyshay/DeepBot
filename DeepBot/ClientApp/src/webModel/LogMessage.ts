import { LogType } from "./Enum/LogType";

export interface LogMessage{
    logType: LogType,
    message: string,
    tcpId: string
}