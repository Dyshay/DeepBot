import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';
import { AuthActions } from '../actions';
import { User } from 'src/webModel/UserModel';
import { Account } from '../models/account';

@Injectable()
export class AuthEffects {

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
                localStorage.setItem('DeepBot', token );
                this.router.navigate(['/']);
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

    constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }
}