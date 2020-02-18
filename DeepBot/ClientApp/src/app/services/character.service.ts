import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as fromBot from '../reducers';
import { environment } from './../../environments/environment';
import { Character } from '../../webModel/Character';

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

}
