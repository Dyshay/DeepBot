import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import icPlus from '@iconify/icons-ic/baseline-add';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
/** character component*/
export class CharacterComponent {
  icPlus = icPlus;
    /** character ctor */
  constructor(private translateService: TranslateService) {

    }
}
