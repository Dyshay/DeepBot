import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GroupActions } from '../actions';
import { TalkService } from "src/app/Services/TalkService";
import { User } from '../../../../webModel/User';
import { NavigationService } from '../../../../@vex/services/navigation.service';
import { AccountService } from '../../../services/account.service';
import { Group } from '../../../../webModel/Group';
import { ToastrService } from 'ngx-toastr';
import { GroupsService } from '../../../services/group.service';

@Injectable()
export class GroupEffects {
    static isConnectedTalker = false;

  createGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.createGroup),
      map(action => action.createdGroup),
      exhaustMap((createdGroup: Group) =>
        this.accountService.createGroup(createdGroup).pipe(
          map(createdGroup => GroupActions.createGroupSuccess({ createdGroup })),
          catchError(error => of(GroupActions.createGroupFailure({ error }))))
      )
    )
  );
  createGroupSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.createGroupSuccess),
      map(action => action.createdGroup),
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
      ofType(GroupActions.createGroupFailure),
      map(action => action.error),

    )
  );


  getAllGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.getAllGroups),
      map(action => action),
      exhaustMap(() =>
        this.groupService.getAllgroups().pipe(
          map(groups => GroupActions.getAllGroupsSuccess({ groups })),
        )))
  );

  getAllGroupsSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.getAllGroupsSuccess),
      map(action => action.groups),
      tap((groups: any) => {
      })
    ),
    { dispatch: false }
  );

  getAllGroupsFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.getAllGroupsFailure),
      map(action => action.error),

    )
  );

  constructor(private actions$: Actions, private accountService: AccountService, private groupService: GroupsService, private toastr : ToastrService, private router: Router, private deeptalk: TalkService,private navigationService:NavigationService) { }
}
