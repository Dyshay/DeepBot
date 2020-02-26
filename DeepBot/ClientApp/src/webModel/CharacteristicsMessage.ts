import { Caracteristic } from './Caracteristic';

export interface CharacteristicsMessage {
  characteristic: Caracteristic,
  characteristicsPoints: number,
  kamas: number,
  tcpId: string
}
