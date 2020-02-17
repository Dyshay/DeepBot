import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../webModel/User';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import * as fromwebUser from '../reducers';
import * as fromRoot from '../reducers';
import { Store } from '@ngrx/store';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private _user = new Subject<User>();

  user: User = new User();

  constructor(private http: HttpClient, private store: Store<fromRoot.State & fromwebUser.State>) {

  }
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

    roleMatch(allowedRoles): boolean {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('DeepBot').split('.')[1]));
        var userRole = payLoad.role;
        allowedRoles.forEach(element => {
            if (userRole == element) {
                isMatch = true;
            }
        });
        return isMatch;
  }

  logout() {
    localStorage.removeItem('DeepBot');
  }
}
