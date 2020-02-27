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

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private store: Store<fromRoot.State & fromBot.State>) { }

  createAccount(accountName: string) {
    console.log(accountName);
    return this.http.post<Account>(`${environment.apiURL}Account/CreateAccount`, { accountName }, httpOptions);
  }

  updateAccount(account: Account) {
    return this.http.post<Account>(`${environment.apiURL}Account/UpdateAccount`, account, httpOptions);
  }

  deleteAccount(key: string) {
    return this.http.post<string>(`${environment.apiURL}Account/DeleteAccount`, { key }, httpOptions);
  }
}
