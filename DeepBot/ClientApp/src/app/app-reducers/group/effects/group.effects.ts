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

  createGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BotActions.createGroup),
      map(action => action.group),
      exhaustMap((group: Group) =>
        this.accountService.createGroup(group).pipe(
          map(group => BotActions.createGroupSuccess({ group })),
          catchError(error => of(BotActions.createGroupFailure({ error }))))
      )
    )
  );
  createGroupSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BotActions.createGroupSuccess),
      map(action => action.group),
      tap((group: any) => {
        this.navigationService.GenerateNavigation();
        this.toastr.success('', 'Groupe ' + group.name + ' ajouté avec succés');
        this.router.navigateByUrl('/');
      })
    ),
    { dispatch: false }
  );

  createGroupFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BotActions.createGroupFailure),
      map(action => action.error),

    )
  );


  getAllGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BotActions.getAllGroups),
      map(action => action),
      exhaustMap(() =>
        this.groupService.getAllgroups().pipe(
          map(groups => BotActions.getAllGroupsSuccess({ groups })),
        )))
  );

  getAllGroupsSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BotActions.getAllGroupsSuccess),
      map(action => action.groups),
      tap((groups: any) => {
      })
    ),
    { dispatch: false }
  );

  getAllGroupsFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BotActions.getAllGroupsFailure),
      map(action => action.error),

    )
  );

    constructor(private actions$: Actions, private authService: AuthService, private router: Router, private deeptalk: TalkService,private navigationService:NavigationService) { }
}
