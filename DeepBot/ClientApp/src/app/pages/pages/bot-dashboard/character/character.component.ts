import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
/** character component*/
export class CharacterComponent {
    /** character ctor */
  constructor(private translateService: TranslateService) {

    }
}
