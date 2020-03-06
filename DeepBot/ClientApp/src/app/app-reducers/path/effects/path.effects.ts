import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PathActions } from '../actions';
import { TalkService } from "src/app/Services/TalkService";
import { NavigationService } from '../../../../@vex/services/navigation.service';
import { ToastrService } from 'ngx-toastr';
import { Path, PathMinDisplayed } from '../../../../webModel/Utility/PathCreator/Path';
import { PathService } from '../../../services/path.service';
import * as fromPath from '../../path/reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class PathEffects {

  createPath$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PathActions.createPath),
      map(action => action.createdPath),
      switchMap((createdPath: any) =>
        this.pathService.createPath(createdPath).pipe(
          map((createdPath :any)=> PathActions.createPathSuccess({ createdPath })),
          catchError(error => of(PathActions.createPathFailure({ error }))))
      )
    );
  });
  createPathSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.createPathSuccess),
      map(action => action.createdPath),
      tap((path: PathMinDisplayed) => {
        if (path != null) {
          this.toastr.success('', 'Trajet créé avec succés');
          this.pathStore.dispatch(PathActions.addOnAllPaths({ path: path }));
        }
       
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



  constructor(private actions$: Actions, private pathService: PathService, private toastr: ToastrService, private router: Router, private deeptalk: TalkService, private navigationService: NavigationService, private pathStore: Store<fromPath.State>) { }
}
