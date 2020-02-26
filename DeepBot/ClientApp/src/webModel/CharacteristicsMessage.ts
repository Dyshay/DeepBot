import { Caracteristic } from './Caracteristic';

export interface CharacteristicsMessage {
  characteristics: Caracteristic,
  kamas: number,
  tcpId: string
}