import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as fromBot from '../reducers';
import { environment } from './../../environments/environment';
import { Character } from '../../webModel/Character';
import { ConfigCharacter } from '../../webModel/ConfigCharacter';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient, private store: Store<fromRoot.State & fromBot.State>) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<Character[]>(`${environment.apiURL}Character/GetAllCharacters`, httpOptions)
  }


  updateCharacterConfig(config: ConfigCharacter) {
    return this.http.post<ConfigCharacter>(`${environment.apiURL}ConfigCharacter/UpdateConfigCharacter`, config, httpOptions);
  }

  updateCharacterDB(character: Character) {
    return this.http.post<Character>(`${environment.apiURL}Character/UpdateCharacter`, character, httpOptions);
  }

  startAndStopBot(key: number) {
    return this.http.post<number>(`${environment.apiURL}Character/StartAndStopBot`, { key }, httpOptions);
  }


  getCharacterBreedName(breedId: number) {
    switch (breedId) {
      case 10:
        return 'Feca';
      case 11:
        return 'Feca';
      case 20:
        return 'Osamoadas';
      case 21:
        return 'Osamoadas';
      case 30:
        return 'Enutrof';
      case 31:
        return 'Enutrof';
      case 40:
        return 'Sram';
      case 41:
        return 'Sram';
      case 50:
        return 'Xelor';
      case 51:
        return 'Xelor';
      case 60:
        return 'Ecaflip';
      case 61:
        return 'Ecaflip';
      case 70:
        return 'Eniripsa';
      case 71:
        return 'Eniripsa';
      case 80:
        return 'Iop';
      case 81:
        return 'Iop';
      case 90:
        return 'Cra';
      case 91:
        return 'Cra';
      case 100:
        return 'Sadida'
      case 101:
        return 'Sadida';
      case 110:
        return 'Sacrieur';
      case 111:
        return 'Sacrieur';
      case 120:
        return 'Pandawa';
      case 121:
        return 'Pandawa';
      default:
        return 'breed id mauvais';
    }
  }

  getCharacterIcon(breedId: string) {
    switch (parseInt(breedId)) {
      case 10:
        return 'assets/img/classe/m_feca.png';
      case 11:
        return 'assets/img/classe/f_feca.png';
      case 20:
        return 'assets/img/classe/m_osamoadas.png';
      case 21:
        return 'assets/img/classe/f_osamodas.png';
      case 30:
        return 'assets/img/classe/m_enutrof.png';
      case 31:
        return 'assets/img/classe/f_enutrof.png';
      case 40:
        return 'assets/img/classe/m_sram.png';
      case 41:
        return 'assets/img/classe/f_sram.png';
      case 50:
        return 'assets/img/classe/m_xelor.png';
      case 51:
        return 'assets/img/classe/f_xelor.png';
      case 60:
        return 'assets/img/classe/m_ecaflip.png';
      case 61:
        return 'assets/img/classe/f_ecaflip.png';
      case 70:
        return 'assets/img/classe/m_eniripsa.png';
      case 71:
        return 'assets/img/classe/f_eniripsa.png';
      case 80:
        return 'assets/img/classe/m_eniripsa.png';
      case 81:
        return 'assets/img/classe/f_eniripsa.png';
      case 90:
        return 'assets/img/classe/m_cra.png';
      case 91:
        return 'assets/img/classe/f_cra.png';
      case 100:
        return 'assets/img/classe/m_sadida.png';
      case 101:
        return 'assets/img/classe/f_sadida.png';
      case 110:
        return 'assets/img/classe/m_sacrieur.png';
      case 111:
        return 'assets/img/classe/f_sacrieur.png';
      case 120:
        return 'assets/img/classe/m_pandawa.png';
      case 121:
        return 'assets/img/classe/f_pandawa.png';
      default:
        return 'breed id mauvais';
    }
  }

}
