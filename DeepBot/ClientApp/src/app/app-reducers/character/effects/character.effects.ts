import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TalkService } from "src/app/Services/TalkService";
import { AuthService } from "src/app/services/auth.services";
import { CharacterActions } from '../actions';

import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../services/account.service';
import { GroupsService } from '../../../services/group.service';
import { NavigationService } from '../../../../@vex/services/navigation.service';

@Injectable()
export class CharacterEffects {
    static isConnectedTalker = false;



  getAllCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.getAllCharacters),
      map(action => action),
      exhaustMap(() =>
        this.accountService.getAllCharacters().pipe(
          map(characters => CharacterActions.getAllCharactersSuccess({ characters })),
        )))
  );

  getAllCharactersSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.getAllCharactersSuccess),
      map(action => action.characters),
      tap((account: any) => {
      })
    ),
    { dispatch: false }
  );

  getAllCharactersFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.getAllCharactersFailure),
      map(action => action.error),

    )
  );


  


  constructor(private actions$: Actions, private accountService: AccountService, private router: Router, private deeptalk: TalkService, private groupService: GroupsService, private navigationService: NavigationService, private toastr:ToastrService) { }
}
