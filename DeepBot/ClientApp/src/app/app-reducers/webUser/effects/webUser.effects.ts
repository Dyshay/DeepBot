import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { webUserActions } from '../actions';

import { TalkService } from "src/app/Services/TalkService";
import { AuthService } from "src/app/services/auth.services";
import { User } from '../../../../webModel/User';
import { NavigationService } from '../../../../@vex/services/navigation.service';

@Injectable()
export class webUserEffects {
    static isConnectedTalker = false;

    login$ = createEffect(() =>
        this.actions$.pipe(
          ofType(webUserActions.login),
            map(action => action.user),
            exhaustMap((user: User) =>
                this.authService.login(user).pipe(
                  map(user => webUserActions.loginSuccess({ user })),
                  catchError(error => of(webUserActions.loginFailure({ error }))))
            )
        )

    );

    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
          ofType(webUserActions.loginSuccess),
            map(action => action.user),
          tap((user: any) => {
                let token = user.token;
                localStorage.setItem('DeepBot', token);
              this.router.navigate(['/']);
            })
        ),
        { dispatch: false }
    );

    loginFailure$ = createEffect(() =>
        this.actions$.pipe(
          ofType(webUserActions.loginFailure),
            map(action => action.error),

        )
    )




  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(webUserActions.getUser),
      map(action => action),
      exhaustMap(() =>
        this.authService.getUserConnected().pipe(
          map(user => webUserActions.getUserSuccess({ user })),
          catchError(error => of(webUserActions.getUserFailure({ error })))
        )))
  );

  getUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(webUserActions.getUserSuccess),
      map(action => action.user),
      tap((user: any) => {

      })
    ),
    { dispatch: false }
  );

  getUserFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(webUserActions.getUserFailure),
      map(action => action.error),
      tap((error: any) => {

      })

    )
  )

    constructor(private actions$: Actions, private authService: AuthService, private router: Router, private deeptalk: TalkService,private navigationService:NavigationService) { }
}
