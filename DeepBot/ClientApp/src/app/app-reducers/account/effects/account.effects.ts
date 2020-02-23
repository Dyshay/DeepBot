import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TalkService } from "src/app/Services/TalkService";
import { AccountActions } from '../actions';

import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../services/account.service';
import { GroupsService } from '../../../services/group.service';
import { Account } from '../../../../webModel/Account';
import { NavigationService } from '../../../../@vex/services/navigation.service';

@Injectable()
export class AccountEffects {

    createAccount$ = createEffect(() =>
        this.actions$.pipe(
          ofType(AccountActions.createAccount),
            map(action => action.accountCreated),
          exhaustMap((accountCreated: Account) =>
            this.accountService.createAccount(accountCreated).pipe(
              map(accountCreated => AccountActions.createAccountSuccess({ accountCreated })),
              catchError(error => of(AccountActions.createAccountFailure({ error }))))
            )
        )

    );

    createAccountSucces$ = createEffect(() =>
        this.actions$.pipe(
          ofType(AccountActions.createAccountSuccess),
            map(action => action.accountCreated),
            tap((account: any) => {
              this.navigationService.GenerateNavigation();
              this.toastr.success('', 'Compte ' + account.accountName + ' ajouté avec succés');
              this.router.navigateByUrl('/');
            })
        ),
        { dispatch: false }
  );

  createAccountFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.createAccountFailure),
      map(action => action.error),

    )
  );


  updateAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.updateAccount),
      map(action => action.accountToUpdate),
      exhaustMap((accountToUpdate: Account) =>
        this.accountService.updateAccount(accountToUpdate).pipe(
          map(accountToUpdate => AccountActions.updateAccountSuccess({ accountToUpdate })),
          catchError(error => of(AccountActions.updateAccountFailure({ error }))))
      )
    )

  );

  updateAccountSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.updateAccountSuccess),
      map(action => action.accountToUpdate),
      tap((account: any) => {
        this.toastr.success('', 'Compte ' + account.accountName + ' modifié avec succés');
      })
    ),
    { dispatch: false }
  );

  updateAccountFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.updateAccountFailure),
      map(action => action.error),

    )
  );


  deleteAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.deleteAccount),
      map(action => action.accountKeyToDelete),
      exhaustMap((accountKeyToDelete: string) =>
        this.accountService.deleteAccount(accountKeyToDelete).pipe(
          map(accountKeyToDelete => AccountActions.deleteAccountSuccess({ accountKeyToDelete })),
          catchError(error => of(AccountActions.deleteAccountFailure({ error }))))
      )
    )

  );

  deleteAccountSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.deleteAccountSuccess),
      map(action => action.accountKeyToDelete),
      tap((accountName: string) => {
        this.toastr.success('', 'Compte ' + accountName + ' supprimé avec succés');
      })
    ),
    { dispatch: false }
  );

  deleteAccountFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.deleteAccountFailure),
      map(action => action.error),

    )
  );

  

  constructor(private actions$: Actions, private accountService: AccountService, private router: Router, private deeptalk: TalkService, private groupService: GroupsService, private navigationService: NavigationService, private toastr:ToastrService) { }
}
