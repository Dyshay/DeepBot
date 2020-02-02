import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../reducers';
import * as fromRoot from '../reducers';
import { Account } from '../../../../../webModel/Account';
import { User } from '../../../../../webModel/User';
import { environment } from '../../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private store: Store<fromRoot.State & fromAuth.State>) { }



  createAccount(account: Account): Observable<any> {
    let body = { account };
    console.log(body);
    return this.http.post<Account>(`${environment.apiURL}Account/CreateAccount`, body, httpOptions);

  }
}
