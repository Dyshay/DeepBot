import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TalkService } from "src/app/Services/TalkService";
import { CharacterActions } from '../actions';

import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../services/account.service';
import { GroupsService } from '../../../services/group.service';
import { NavigationService } from '../../../../@vex/services/navigation.service';
import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../../webModel/Character';
import { ConfigCharacter } from '../../../../webModel/ConfigCharacter';

@Injectable()
export class CharacterEffects {


  updateCharacterConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.updateCharacterConfig),
      map(action => action.characterConfigToUpdate),
      exhaustMap((characterConfigToUpdate: ConfigCharacter) =>
        this.characterService.updateCharacterConfig(characterConfigToUpdate).pipe(
          map(characterConfigToUpdate => CharacterActions.updateCharacterConfigSuccess({ characterConfigToUpdate })),
          catchError(error => of(CharacterActions.updateCharacterConfigFailure({ error }))))
      )
    )

  );

  updateCharacterConfigSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.updateCharacterConfigSuccess),
      map(action => action.characterConfigToUpdate),
      tap((group: any) => {
        this.toastr.success('', 'Configuration modifié avec succés');
      })
    ),
    { dispatch: false }
  );

  updateCharacterConfigFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.updateCharacterConfigFailure),
      map(action => action.error),

    )
  );



  constructor(private actions$: Actions, private characterService: CharacterService, private router: Router, private deeptalk: TalkService, private groupService: GroupsService, private navigationService: NavigationService, private toastr:ToastrService) { }
}
