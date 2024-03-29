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
import { ConfigGroup } from '../../../../webModel/ConfigGroup';

@Injectable()
export class GroupEffects {

  createGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.createGroup),
      map(action => action.createdGroup),
      exhaustMap((createdGroup: Group) =>
        this.groupService.createGroup(createdGroup).pipe(
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
      tap((groups: Group[]) => {
        for (var i = 0; i < groups.length; i++) {
          var level = 0;
          var pp = 0;
          var grouptotal = 0;
          for (var j = 0; j < groups[i].followers.length; j++) {
            level = level + groups[i].followers[j].level;
            grouptotal++;
            if (groups[i].followers[j].characteristic != null)
               pp = pp + groups[i].followers[j].characteristic.prospection.total;
          }
          level = level + groups[i].leader.level;
          grouptotal++;
          if (groups[i].leader.characteristic != null)
            pp = pp + groups[i].leader.characteristic.prospection.total;

          groups[i].groupLevel = level;
          groups[i].groupProspection = pp
          groups[i].groupTotal = grouptotal;
        }

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


  updateGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.updateGroup),
      map(action => action.groupToUpdate),
      exhaustMap((groupToUpdate: Group) =>
        this.groupService.updateGroup(groupToUpdate).pipe(
          map(groupToUpdate => GroupActions.updateGroupSuccess({ groupToUpdate })),
          catchError(error => of(GroupActions.updateGroupFailure({ error }))))
      )
    )

  );

  updateGroupSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.updateGroupSuccess),
      map(action => action.groupToUpdate),
      tap((group: any) => {
        this.toastr.success('', 'Group ' + group.name + ' modifié avec succés');
      })
    ),
    { dispatch: false }
  );

  updateGroupFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.updateGroupFailure),
      map(action => action.error),

    )
  );



  deleteGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.deleteGroup),
      map(action => action.groupKeyToDelete),
      exhaustMap((groupKeyToDelete: string) =>
        this.groupService.deleteGroup(groupKeyToDelete).pipe(
          map(name => GroupActions.deleteGroupSuccess({ name })),
          catchError(error => of(GroupActions.deleteGroupFailure({ error }))))
      )
    )

  );

  deleteGroupSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.deleteGroupSuccess),
      map(action => action.name),
      tap((name: string) => {
        this.toastr.success('', 'Group ' + name + ' supprimé avec succés');
      })
    ),
    { dispatch: false }
  );

  deleteGroupFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.deleteGroupFailure),
      map(action => action.error),

    )
  );


  updateGroupConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.updateGroupConfig),
      map(action => action.groupConfigToUpdate),
      exhaustMap((groupConfigToUpdate: ConfigGroup) =>
        this.groupService.updateGroupConfig(groupConfigToUpdate).pipe(
          map(groupConfigToUpdate => GroupActions.updateGroupConfigSuccess({ groupConfigToUpdate })),
          catchError(error => of(GroupActions.updateGroupConfigFailure({ error }))))
      )
    )

  );

  updateGroupConfigSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.updateGroupConfigSuccess),
      map(action => action.groupConfigToUpdate),
      tap((config: any) => {
        this.toastr.success('', 'Configuration modifié avec succés');
      })
    ),
    { dispatch: false }
  );

  updateGroupConfigFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupActions.updateGroupConfigFailure),
      map(action => action.error),

    )
  );


  constructor(private actions$: Actions, private accountService: AccountService, private groupService: GroupsService, private toastr : ToastrService, private router: Router, private deeptalk: TalkService,private navigationService:NavigationService) { }
}
