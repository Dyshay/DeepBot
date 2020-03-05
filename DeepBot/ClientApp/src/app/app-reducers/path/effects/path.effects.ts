import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PathActions } from '../actions';
import { TalkService } from "src/app/Services/TalkService";
import { NavigationService } from '../../../../@vex/services/navigation.service';
import { ToastrService } from 'ngx-toastr';
import { Path } from '../../../../webModel/Utility/PathCreator/Path';
import { PathService } from '../../../services/path.service';

@Injectable()
export class PathEffects {

  createPath$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.createPath),
      map(action => action.createdPath),
      exhaustMap((createdPath: any) =>
        this.pathService.createPath(createdPath).pipe(
          map(createdPath => PathActions.createPathSuccess({ createdPath })),
          catchError(error => of(PathActions.createPathFailure({ error }))))
      )
    )
  );
  createPathSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.createPathSuccess),
      map(action => action.createdPath),
      tap((path: any) => {

      })
    ),
    { dispatch: false }
  );

  createPathFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.createPathFailure),
      map(action => action.error),

    )
  );



  constructor(private actions$: Actions, private pathService: PathService, private toastr : ToastrService, private router: Router, private deeptalk: TalkService,private navigationService:NavigationService) { }
}
