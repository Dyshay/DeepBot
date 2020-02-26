import { Caracteristic } from './Caracteristic';

export interface CharacteristicsMessage {
  characteristics: Caracteristic,
  availableCharactericsPts: number,
  kamas: number,
  tcpId: string
}
