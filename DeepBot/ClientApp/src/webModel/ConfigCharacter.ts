export class ConfigCharacter {
  key: string;
  description: string;
  moveDelay: number;
  pauseNumber: number;
  agressionZone: number;
  autoAnswer: boolean;
  autoDisconnect: boolean;
  refuseDelay: number;
  msgAfterRefuse: boolean;
  autoCaptureArchi: boolean;
  discordMsgModerator: boolean;
  discordMsgMP: boolean;
  discordMsgStop: boolean;
  positionStartFight: number;
  blockSpectate: number;
  blockFight: boolean;
  speedFightAction: number;
  challengesToTry: number[];
  minLifeRegenerate: number;
  useConsommable: boolean;
  minLifeToFight: number;
  autoBoostStats: { key: string, value: number,order:number }[];
  autoDeleteRessources: number[];
  consommableToUse: number[];
}



