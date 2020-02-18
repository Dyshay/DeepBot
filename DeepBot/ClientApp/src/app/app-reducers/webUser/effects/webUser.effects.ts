import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { webUserActions } from '../actions';

import { TalkService } from "src/app/Services/TalkService";
import { UserService } from "src/app/services/user.service";
import { User } from '../../../../webModel/User';
import { NavigationService } from '../../../../@vex/services/navigation.service';
import * as fromAccount from '../../account/reducers';
import * as fromCharacter from '../../character/reducers';
import { Store } from '@ngrx/store';
import { AccountActions } from '../../account/actions';
import { Character } from '../../../../webModel/Character';
import { CharacterActions } from '../../character/actions';

@Injectable()
export class webUserEffects {
    static isConnectedTalker = false;

    login$ = createEffect(() =>
        this.actions$.pipe(
          ofType(webUserActions.login),
            map(action => action.user),
            exhaustMap((user: User) =>
              this.userService.login(user).pipe(
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
        this.userService.getUser().pipe(
          map(user => webUserActions.getUserSuccess({ user })),
          catchError(error => of(webUserActions.getUserFailure({ error })))
        )))
  );

  getUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(webUserActions.getUserSuccess),
      map(action => action.user),
      tap((user: User) => {
        if (!webUserEffects.isConnectedTalker) {
          this.deeptalk.startConnection();
          webUserEffects.isConnectedTalker = false;
        }
        let allAccounts = user.accounts;
        this.accountStore.dispatch(AccountActions.getAllAccount({ allAccounts }));
        let allCurrentCharacters = [];
        let allCharacters = []
        for (var i = 0; i < user.accounts.length; i++) {
          allCurrentCharacters.push(user.accounts[i].currentCharacter);
          for (var j = 0; j < user.accounts[i].characters.length; j++) {          
            allCharacters.push(user.accounts[i].characters[j]);
          }
        }
        this.characterStore.dispatch(CharacterActions.getAllCharacters({ allCharacters }));
        this.characterStore.dispatch(CharacterActions.getAllCurrentCharacters({ allCurrentCharacters }));
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

    constructor(private actions$: Actions, private userService: UserService, private router: Router, private deeptalk: TalkService,private navigationService:NavigationService,
private accountStore: Store<fromAccount.State>, private characterStore:Store<fromCharacter.State>) { }
}
