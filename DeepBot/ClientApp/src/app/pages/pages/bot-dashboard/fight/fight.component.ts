import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Character } from '../../../../../webModel/Character';

@Component({
    selector: 'app-fight',
    templateUrl: './fight.component.html',
    styleUrls: ['./fight.component.scss']
})
/** fight component*/
export class FightComponent {
  @Input() character: Character
    /** fight ctor */
  constructor(private translateService: TranslateService) {

    }
}
