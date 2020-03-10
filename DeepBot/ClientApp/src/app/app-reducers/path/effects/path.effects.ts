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
import * as fromCharacter from '../../character/reducers';
import { Character } from '../../../../webModel/Character';

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


  getAllPaths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.getAllPaths),
      map(action => action),
      exhaustMap(() =>
        this.pathService.getAllPaths().pipe(
          map(allPaths => PathActions.getAllPathsSuccess({ allPaths })),
          catchError(error => of(PathActions.getAllPathsFailure({ error }))))
        ))
  );

  getAllPathsSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.getAllPathsSuccess),
      map(action => action.allPaths),
      tap((allPaths: PathMinDisplayed[]) => {
        console.log(allPaths);
        this.characterStore.select(fromCharacter.getAllCurrentCharacters).subscribe(
          (result: Character[]) => {
        for (var i = 0; i < allPaths.length; i++) {
               let number = result.filter(o => o.fk_Trajet == allPaths[i].key).length;
              allPaths[i].usedNumber = number;
            }
          }
        );
        })
    ),
    { dispatch: false }
  );

  getAllPathsFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.getAllPathsFailure),
      map(action => action.error),

    )
  );

  getPathByKey$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.getPathByKey),
      map(action => action.keyPath),
      switchMap(((keyPath: any) =>
        this.pathService.getPathByKey(keyPath).pipe(
          map(updatePath => PathActions.getPathByKeySuccess({ updatePath })),
          catchError(error => of(PathActions.getPathByKeyFailure({ error }))))
      ))
    )
  );

  getPathByKeySucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.getPathByKeySuccess),
      map(action => action.updatePath),
      tap((path: Path) => {
        this.pathService.emitChange(path);
      })
    ),
    { dispatch: false }
  );

  getPathByKeyFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.getPathByKeyFailure),
      map(action => action.error),

    )
  );


  updatePath$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PathActions.updatePath),
      map(action => action.updatedPath),
      switchMap((updatedPath: any) =>
        this.pathService.updatePath(updatedPath).pipe(
          map((updatedPath: any) => PathActions.updatePathSuccess({ updatedPath })),
          catchError(error => of(PathActions.updatePathFailure({ error }))))
      )
    );
  });
  updatePathSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.updatePathSuccess),
      map(action => action.updatedPath),
      tap((path: PathMinDisplayed) => {
        if (path != null) {
          this.toastr.success('', 'Trajet modifié avec succés');
        }

      })
    ),
    { dispatch: false }
  );

  updatePathFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.updatePathFailure),
      map(action => action.error),

    )
  );

  deletePath$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.deletePath),
      map(action => action.pathKeyToDelete),
      exhaustMap((pathKeyToDelete: string) =>
        this.pathService.deletePath(pathKeyToDelete).pipe(
          map(name => PathActions.deletePathSuccess({ name })),
          catchError(error => of(PathActions.deletePathFailure({ error }))))
      )
    )

  );

  deletePathSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.deletePathSuccess),
      map(action => action.name),
      tap((name: string) => {
        this.toastr.success('', 'Trajet ' + name + ' supprimé avec succés');
      })
    ),
    { dispatch: false }
  );

  deletePathFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.deletePathFailure),
      map(action => action.error),

    )
  );



  constructor(private actions$: Actions, private pathService: PathService, private characterStore: Store<fromCharacter.State>, private toastr: ToastrService,
    private router: Router, private deeptalk: TalkService, private navigationService: NavigationService, private pathStore: Store<fromPath.State>) { }
}
