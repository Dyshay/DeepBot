import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Character } from '../../../../../webModel/Character';
import icSave from '@iconify/icons-ic/outline-save';
import icImport from '@iconify/icons-mdi/file-import-outline';
import { MatSliderChange } from '@angular/material';
import * as fromCharacter from 'src/app/app-reducers/character/reducers'
import { CharacterActions } from 'src/app/app-reducers/character/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
/** fight component*/
export class FightComponent {
  @Input() character: Character
  icSave = icSave;
  icImport = icImport;
  /** fight ctor */
  constructor(private translateService: TranslateService, private storeCharacter: Store<fromCharacter.State>) {

  }

  Save() {
    let characterConfigToUpdate = this.character.config;
    this.storeCharacter.dispatch(CharacterActions.updateCharacterConfig({ characterConfigToUpdate }));
  }
  Import() {

  }
}
