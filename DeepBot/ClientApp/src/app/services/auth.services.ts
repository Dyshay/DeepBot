import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../reducers';
import * as fromRoot from '../reducers';
import { User } from 'src/webModel/UserModel';
import { environment } from './../../environments/environment';
import { Account } from './../../webModel/Account';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store<fromRoot.State & fromAuth.State>) { }

  login({ userName, userPassword }: User): Observable<any> {
    let body = {
      UserName: userName,
      Password: userPassword,
    }
    return this.http.post<User>(`${environment.apiURL}User/Login`, body, httpOptions);
  }

  getUser(): Observable<any> {
    return this.http.get<Account>(`${environment.apiURL}User/getUser`);
  }

  logout() {
    localStorage.removeItem('DeepBot');
  }

}
