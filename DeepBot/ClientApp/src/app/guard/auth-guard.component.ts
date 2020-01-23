import { Component, Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UserService } from '../Service/user.service';

@Injectable({
    providedIn: 'root'
})
/** auth.guard component*/
export class AuthGuard implements CanActivate {
    /** auth.guard ctor */
    constructor(private router: Router, private service: UserService) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        if (localStorage.getItem("DeepBot") != null) {

            //let roles = next.data['permittedRoles'] as Array<string>
            var payLoad = JSON.parse(window.atob(localStorage.getItem('DeepBot').split('.')[1]));

            let roles = [payLoad.role]

            if (roles) {
                if (this.service.roleMatch(roles)) {
                    return true;
                }
                else {
                    this.router.navigateByUrl('forbiden');
                    return false;
                }

            }
            else {
                this.router.navigateByUrl('login');
                return false;
            }
        }
        else {
            this.router.navigateByUrl('login');
            return false;
        }
    }
}