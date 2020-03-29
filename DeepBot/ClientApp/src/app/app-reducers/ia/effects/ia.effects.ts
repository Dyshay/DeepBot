import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IaActions } from '../actions';

import { ToastrService } from 'ngx-toastr';
import { IaService } from '../../../services/ia.service';
import { IA } from '../../../../webModel/IA';
import { Store } from '@ngrx/store';
import * as fromia from 'src/app/app-reducers/ia/reducers';

@Injectable()
export class IaEffects {

  createIa$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IaActions.createIa),
      map(action => action.createdIa),
      switchMap((createdIa: any) =>
        this.iaService.createIa(createdIa).pipe(
          map((createdIa: any) => IaActions.createIaSuccess({ createdIa })),
          catchError(error => of(IaActions.createIaFailure({ error }))))
      )
    );
  });
  createIaSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IaActions.createIaSuccess),
      map(action => action.createdIa),
      tap((ia: IA) => {
        if (ia != null) {
          this.toastr.success('', 'IA créé avec succés');
          this.iaStore.dispatch(IaActions.addOnAllIA({ ia: ia }));
        }
       
      })
    ),
    { dispatch: false }
  );

  createPathFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IaActions.createIaFailure),
      map(action => action.error),

    )
  );

  getAllIas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IaActions.getAllIAs),
      map(action => action),
      exhaustMap(() =>
        this.iaService.getAllIa().pipe(
          map(allIas => IaActions.getAllIAsSuccess({ allIas })),
          catchError(error => of(IaActions.getAllIAsFailure({ error }))))
      ))
  );

  getAllIasSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IaActions.getAllIAsSuccess),
      map(action => action.allIas),
      tap((allIas: IA[]) => {
      })
    ),
    { dispatch: false }
  );

  getAllIasFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IaActions.getAllIAsFailure),
      map(action => action.error),

    )
  );

  updateIa$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IaActions.updateIa),
      map(action => action.updatedIa),
      switchMap((updatedIa: any) =>
        this.iaService.updateIa(updatedIa).pipe(
          map((updatedIa: any) => IaActions.updateIaSuccess({ updatedIa })),
          catchError(error => of(IaActions.updateIaFailure({ error }))))
      )
    );
  });
  updateIaSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IaActions.updateIaSuccess),
      map(action => action.updatedIa),
      tap((ia: IA) => {
        if (ia != null) {
          this.toastr.success('', 'IA modifiée avec succés');
        }

      })
    ),
    { dispatch: false }
  );

  updateIaFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IaActions.updateIaFailure),
      map(action => action.error),

    )
  );


  deleteIa$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IaActions.deleteIa),
      map(action => action.iaKeyToDelete),
      exhaustMap((iaKeyToDelete: string) =>
        this.iaService.deleteIa(iaKeyToDelete).pipe(
          map(name => IaActions.deleteIaSuccess({ name })),
          catchError(error => of(IaActions.deleteIaFailure({ error }))))
      )
    )

  );

  deleteIaSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IaActions.deleteIaSuccess),
      map(action => action.name),
      tap((name: string) => {
        this.toastr.success('', 'IA ' + name + ' supprimée avec succés');
      })
    ),
    { dispatch: false }
  );

  deleteIaFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IaActions.deleteIaFailure),
      map(action => action.error),

    )
  );




  constructor(private actions$: Actions, private iaService: IaService, private toastr: ToastrService, private iaStore: Store<fromia.State>,private router: Router) { }
}
