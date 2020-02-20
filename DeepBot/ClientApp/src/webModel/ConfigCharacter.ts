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
  BlockFight: boolean;
  SpeedFightAction: number;
  ChallengesToTry: number[];
  MinLifeRegenerate: number;
  UseConsommable: boolean;
  MinLifeToFight: number;
  AutoBoostStats: { key: string, value: number }[];
  AutoDeleteRessources: number[];
  ConsommableToUse: number[];
}



