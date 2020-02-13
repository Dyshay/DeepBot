import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Account, CreateAccount } from '../../../../../webModel/Account';
import { User } from '../../../../../webModel/User';
import { TalkService } from "src/app/Services/TalkService";
import { AuthService } from "src/app/services/auth.services";
import { BotActions } from '../actions';
import { Character } from '../../../../../webModel/Character';
import { AccountService } from '../../../../services/account.service';

@Injectable()
export class BotEffects {
    static isConnectedTalker = false;

    createAccount$ = createEffect(() =>
        this.actions$.pipe(
          ofType(BotActions.createAccount),
            map(action => action.account),
          exhaustMap((account: Account) =>
              this.accountService.createAccount(account).pipe(
                  map(account => BotActions.createAccountSuccess({ account })),
                  catchError(error => of(BotActions.createAccountFailure({ error }))))
            )
        )

    );

    createAccountSucces$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BotActions.createAccountSuccess),
            map(action => action.account),
            tap((account: any) => {
              console.log(account);
            })
        ),
        { dispatch: false }
  );

  createAccountFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BotActions.createAccountFailure),
      map(action => action.error),

    )
  );

  getAllCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BotActions.getAllCharacters),
      map(action => action),
      exhaustMap(() =>
        this.accountService.getAllCharacters().pipe(
          map(characters => BotActions.getAllCharactersSuccess({ characters })),
        )))
  );

  getAllCharactersSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BotActions.getAllCharactersSuccess),
      map(action => action.characters),
      tap((account: any) => {
      })
    ),
    { dispatch: false }
  );

  getAllCharactersFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BotActions.getAllCharactersFailure),
      map(action => action.error),

    )
  );

    constructor(private actions$: Actions, private accountService: AccountService, private router: Router, private deeptalk: TalkService) { }
}
