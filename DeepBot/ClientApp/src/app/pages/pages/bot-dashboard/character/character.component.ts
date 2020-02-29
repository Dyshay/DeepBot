import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import icPlus from '@iconify/icons-ic/baseline-add';
import { Character } from '../../../../../webModel/Character';
import { FormsModule } from '@angular/forms';
import * as fromCharacter from 'src/app/app-reducers/character/reducers'
import { CharacterActions } from 'src/app/app-reducers/character/actions';
import icSave from '@iconify/icons-ic/outline-save';
import icImport from '@iconify/icons-mdi/file-import-outline';
import icDelete from '@iconify/icons-fa-solid/trash';
import { Store } from '@ngrx/store';
import { Caracteristic } from 'src/webModel/Caracteristic';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
/** character component*/
export class CharacterComponent {
  icSave = icSave;
  icImport = icImport;
  icDelete = icDelete;
  @Input() character: Character;
  @Input() characteristics: Caracteristic;
  @Input() kamas: number;
  @Input() points: number;
  icPlus = icPlus;
  autoBoostValue =0;
  autoBoostKey;
    /** character ctor */
  constructor(private translateService: TranslateService, private storeCharacter: Store<fromCharacter.State>) {
    console.log(this.characteristics)
  }
  AddAutoBoost() {
    console.log(this.autoBoostKey, this.autoBoostValue)

    if (this.character.config.autoBoostStats == null || this.character.config.autoBoostStats.length === 0) {
      let autoboost = {
        stat: this.autoBoostKey,
        value: this.autoBoostValue,
        order:0
      }

      this.character.config.autoBoostStats = [autoboost];
    }
    else {
      this.character.config.autoBoostStats.push(
        {
          stat: this.autoBoostKey,
          value: this.autoBoostValue,
          order: this.character.config.autoBoostStats[this.character.config.autoBoostStats.length-1].order +1
        }
      )
    }
  }
  DeleteAutoBoost(order) {
    var index = this.character.config.autoBoostStats.findIndex(o => o.order == order);
    this.character.config.autoBoostStats.splice(index, 1);
  }
  Save() {
    let characterConfigToUpdate = this.character.config;
    this.storeCharacter.dispatch(CharacterActions.updateCharacterConfig({ characterConfigToUpdate }));
  }
  Import() {

  }

}
