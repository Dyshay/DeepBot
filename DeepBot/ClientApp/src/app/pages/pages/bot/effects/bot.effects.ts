import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Account } from '../../../../../webModel/Account';
import { User } from '../../../../../webModel/User';
import { TalkService } from "src/app/Services/TalkService";
import { AuthService } from "src/app/services/auth.services";
import { BotActions } from '../actions';
import { Character } from '../../../../../webModel/Character';
import { AccountService } from '../../../../services/account.service';

@Injectable()
export class BotEffects {
    static isConnectedTalker = false;

    createAccounts$ = createEffect(() =>
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
            tap((account: Account) => {
              console.log(account);
            })
        ),
        { dispatch: false }
    );

    receveidCharactersFailure$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BotActions.createAccountFailure),
            map(action => action.error),
            
        )
    )

    constructor(private actions$: Actions, private accountService: AccountService, private router: Router, private deeptalk: TalkService) { }
}
