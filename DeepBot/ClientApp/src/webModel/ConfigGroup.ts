import { Classe } from './Enum/Classe';

export class ConfigGroup {
  key: string;
  description: string;
  creationDate: Date;
  updatedDate: Date;
  fk_User: string;
  fk_Group: string;
  pauseNumber: number;
  pauseTime: number;
  agressionZone: number;
  alignTeam: boolean;
  autoCaptureArchi: boolean;
  fk_CharacterCapture: number;
  blockSpectate: boolean;
  blockFightGroupOnly: boolean
  challengesToTry: number[];
  autoDisconnect: boolean;
}


