import { LogType } from "./Enum/LogType";

export interface LogMessage{
    LogType: LogType,
    Message: string,
    TcpId: number
}