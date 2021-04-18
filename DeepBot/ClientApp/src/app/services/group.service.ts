import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as fromBot from '../reducers';
import { environment } from './../../environments/environment';
import { Account, CreateAccount } from '../../webModel/Account';
import { User } from '../../webModel/User';
import { Character } from '../../webModel/Character';
import { Group } from '../../webModel/Group';
import { ConfigGroup } from '../../webModel/ConfigGroup';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private http: HttpClient, private store: Store<fromRoot.State & fromBot.State>) { }


  getAllgroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${environment.apiURL}Group/GetAllGroups`, httpOptions);
}

  createGroup(createdGroup: Group): Observable<any> {
    return this.http.post<Group>(`${environment.apiURL}Group/CreateGroup`, createdGroup, httpOptions)
  }

  updateGroup(group: Group) {
    return this.http.post<Group>(`${environment.apiURL}Group/UpdateGroup`, group, httpOptions);
  }

  deleteGroup(key: string) {
    return this.http.post<string>(`${environment.apiURL}Group/DeleteGroup`, { key }, httpOptions);
  }


  updateGroupConfig(config: ConfigGroup) {
    return this.http.post<ConfigGroup>(`${environment.apiURL}ConfigGroup/UpdateConfigGroup`, config, httpOptions);
  }

}
