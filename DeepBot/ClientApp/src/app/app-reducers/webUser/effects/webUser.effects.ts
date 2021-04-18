import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { webUserActions } from '../actions';
import { GroupActions } from '../../group/actions';
import { TalkService } from "src/app/Services/TalkService";
import { UserService } from "src/app/services/user.service";
import { User } from '../../../../webModel/User';
import { NavigationService } from '../../../../@vex/services/navigation.service';
import * as fromAccount from '../../account/reducers';
import * as fromCharacter from '../../character/reducers';
import * as fromUser from '../../webUser/reducers';
import * as fromGroup from '../../group/reducers';
import { Store } from '@ngrx/store';
import { AccountActions } from '../../account/actions';
import { Character } from '../../../../webModel/Character';
import { CharacterActions } from '../../character/actions';
import { ToastrService } from 'ngx-toastr';

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
        this.userStore.dispatch(webUserActions.getUser());
        this.groupStore.dispatch(GroupActions.getAllGroups());
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
      tap((error: any) => {
        console.log(error.error.message);
        if (error.error.message === "IdOrPwdIncorrect") {
          this.toastr.error('', 'Identifiants ou mot de passe incorrect.');
        }
        else if (error.error.message === "AccountProblemRole") {
          this.toastr.error('Veuillez contacter le support.', 'Votre compte n"a pas été créé correctement');
        }
        else if (error.error.message === "MailNotConfirmed") {
          this.toastr.error('', 'Veuillez confirmer votre compte via l"email recu sur votre boite mail.');
        }
      })
    )
  );

  sideNav$ = createEffect(() =>
    this.actions$.pipe(
      ofType(webUserActions.getBotNav),
      map(action => action),
      exhaustMap(() =>
        this.navigationService.GenerateNavigation().pipe(
          map(sideNav => webUserActions.getBotNavSuccess({ sideNav })),
          catchError(error => of(webUserActions.getBotNavFailure({ error }))))
      )
    )
  );

  sideNavSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(webUserActions.getBotNavSuccess),
      map(action => action.sideNav),
      tap((user: any) => {
      })
    ),
    { dispatch: false }
  );

  sideNavFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(webUserActions.getBotNavFailure),
      map(action => action.error),
      tap((error: any) => {
      })
    )
  );


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
      tap((user: any) => {
        if (!webUserEffects.isConnectedTalker) {
          this.deeptalk.startConnection();
          webUserEffects.isConnectedTalker = false;
        }
        let allAccounts = user.accounts;
        this.accountStore.dispatch(AccountActions.getAllAccount({ allAccounts }));

        let allCurrentCharacters = [];
        let allCharacters = []
        for (var i = 0; i < user.accounts.length; i++) {
          if (user.accounts[i].currentCharacter !== null)
            allCurrentCharacters.push(user.accounts[i].currentCharacter);
          for (var j = 0; j < user.accounts[i].characters.length; j++) {
            if (user.accounts[i].characters[j] !== null)
              allCharacters.push(user.accounts[i].characters[j]);
          }
         
        }
        user.accounts = null;
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
  );

  constructor(private actions$: Actions, private userService: UserService, private router: Router, private toastr: ToastrService, private deeptalk: TalkService, private navigationService: NavigationService,
    private accountStore: Store<fromAccount.State>, private groupStore: Store<fromGroup.State>, private userStore: Store<fromUser.State>, private characterStore: Store<fromCharacter.State>) { }
}
