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
import * as fromCharacter from 'src/app/app-reducers/character/reducers';
import { Store, select } from '@ngrx/store';
import { AccountState } from '../../../../webModel/Enum/AccountState';

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

  updateCharacterDB$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.updateCharacterDB),
      map(action => action.characterToUpdate),
      exhaustMap((characterToUpdate: Character) =>
        this.characterService.updateCharacterDB(characterToUpdate).pipe(
          map(characterToUpdate => CharacterActions.updateCharacterDBSuccess({ characterToUpdate })),
          catchError(error => of(CharacterActions.updateCharacterDBFailure({ error }))))
      )
    )

  );


  updateCharacterDBSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.updateCharacterDBSuccess),
      map(action => action.characterToUpdate),
      tap((character: any) => {
        this.characterStore.dispatch(CharacterActions.updateCharacterFKPath({ fk_Path: character.fk_Trajet, key: character.key }));
        this.toastr.success('', 'Personnage modifié avec succés');
      })
    ),
    { dispatch: false }
  );

  updateCharacterDBFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.updateCharacterConfigFailure),
      map(action => action.error),
    )
  );


  startAndStopBot$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.startAndStopBot),
      map(action => action.key),
      exhaustMap((key: number) =>
        this.characterService.startAndStopBot(key).pipe(
          map(key => CharacterActions.startAndStopBotSuccess({ key })),
          catchError(error => of(CharacterActions.startAndStopBotFailure({ error }))))
      )
    )

  );


  startAndStopBotSucces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.startAndStopBotSuccess),
      map(action => action.key),
      tap((key: any) => {
        this.characterStore.pipe(select(fromCharacter.getAllCurrentCharacters)).subscribe(
          (result: Character[]) => {
            var index = result.findIndex(o => o.key == key);
            if (index != -1) {
              if (result[index].state == AccountState.IDLE) {
                this.toastr.success('', 'Bot' + result[index].name + " lancé");
              }
              else
                this.toastr.success('', 'Bot' + result[index].name + " arrété");
            }
          }
        );
        
      })
    ),
    { dispatch: false }
  );

  startAndStopBotFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.startAndStopBotFailure),
      map(action => action.error),
    )
  );



  constructor(private actions$: Actions, private characterStore: Store<fromCharacter.State>, private characterService: CharacterService, private router: Router, private deeptalk: TalkService, private groupService: GroupsService, private navigationService: NavigationService, private toastr:ToastrService) { }
}
