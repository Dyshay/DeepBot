import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../webModel/UserModel';

@Injectable()
export class UserService {

    user: User = new User();

    constructor(private http: HttpClient) {

    }



    roleMatch(allowedRoles): boolean {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('DeepBot').split('.')[1]));
        var userRole = payLoad.role;
        allowedRoles.forEach(element => {
            if (userRole == element) {
                isMatch = true;
                return false;
            }
        });
        return isMatch;
    }
}
