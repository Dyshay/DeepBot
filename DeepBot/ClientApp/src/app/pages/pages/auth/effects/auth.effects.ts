import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthActions } from '../actions';
import { Account } from '../../../../../webModel/Account';
import { User } from '../../../../../webModel/User';
import { TalkService } from "src/app/Services/TalkService";
import { AuthService } from "src/app/services/auth.services";
import { NavigationService } from '../../../../../@vex/services/navigation.service';

@Injectable()
export class AuthEffects {
    static isConnectedTalker = false;

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            map(action => action.user),
            exhaustMap((user: User) =>
                this.authService.login(user).pipe(
                    map(user => AuthActions.loginSuccess({ user })),
                    catchError(error => of(AuthActions.loginFailure({ error }))))
            )
        )

    );

    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            map(action => action.user),
            tap((user: any) => {
                let token = user.token;
                localStorage.setItem('DeepBot', token);
              this.router.navigate(['/']);
              this.navigationService.GenerateNavigation();
            })
        ),
        { dispatch: false }
    );

    loginFailure$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginFailure),
            map(action => action.error),

        )
    )

    fetchUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.getUser),
            map(action => action),
            exhaustMap(() =>
                this.authService.getUser().pipe(
                    map(account => AuthActions.getUserSuccess({ account })),
                )))

    );

    fetchUserSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.getUserSuccess),
            map(action => action.account),
            tap((account: any) => {
                if(!AuthEffects.isConnectedTalker){
                    this.deeptalk.startConnection();
                    AuthEffects.isConnectedTalker = true;
                }
            })
        ),
        { dispatch: false }
    );

    constructor(private actions$: Actions, private authService: AuthService, private router: Router, private deeptalk: TalkService,private navigationService:NavigationService) { }
}
