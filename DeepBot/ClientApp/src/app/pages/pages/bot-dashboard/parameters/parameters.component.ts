import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Character } from '../../../../../webModel/Character';
import icSave from '@iconify/icons-ic/outline-save';
import icImport from '@iconify/icons-mdi/file-import-outline';

@Component({
    selector: 'app-parameters',
    templateUrl: './parameters.component.html',
    styleUrls: ['./parameters.component.scss']
})
/** parameters component*/
export class ParametersComponent {
  @Input() character: Character;

  icSave = icSave;
  icImport = icImport;
    /** parameters ctor */
  constructor(private translateService: TranslateService) {

  }

  Save() {
  }

  Import() {

  }
}
