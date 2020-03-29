import { Character } from '../Character';
import { Classe } from '../Enum/Classe';
import { TypeIA } from '../IA';

export interface IaInterface {
  key:string,
  name: string,
  class: Classe,
  type: TypeIA
}
