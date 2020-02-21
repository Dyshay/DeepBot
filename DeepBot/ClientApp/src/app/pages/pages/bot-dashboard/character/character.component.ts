import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import icPlus from '@iconify/icons-ic/baseline-add';
import { Character } from '../../../../../webModel/Character';
import { FormsModule } from '@angular/forms';
import icSave from '@iconify/icons-ic/outline-save';
import icImport from '@iconify/icons-mdi/file-import-outline';
import icDelete from '@iconify/icons-fa-solid/trash';

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
  @Input() character: Character
  icPlus = icPlus;
  autoBoostValue =0;
  autoBoostKey;
    /** character ctor */
  constructor(private translateService: TranslateService) {

  }
  AddAutoBoost() {
    console.log(this.autoBoostKey, this.autoBoostValue)

    if (this.character.config.autoBoostStats == null || this.character.config.autoBoostStats.length === 0) {
      let autoboost = {
        key: this.autoBoostKey,
        value: this.autoBoostValue,
        order:0
      }

      this.character.config.autoBoostStats = [autoboost];
    }
    else {
      this.character.config.autoBoostStats.push(
        {
          key: this.autoBoostKey,
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

}
