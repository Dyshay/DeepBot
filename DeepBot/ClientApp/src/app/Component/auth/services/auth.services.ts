import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../reducers';
import * as fromRoot from '../reducers';
import { User } from 'src/webModel/UserModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store<fromRoot.State & fromAuth.State>) { }

  login({ userEmail, userPassword }: User): Observable<any> {
    return this.http.post<User>('https://localhost:44373/api/auth/login', { userEmail, userPassword });
  }

  logout() {
    localStorage.removeItem('DeepBot');
  }

}
