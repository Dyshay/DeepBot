import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-fight',
    templateUrl: './fight.component.html',
    styleUrls: ['./fight.component.scss']
})
/** fight component*/
export class FightComponent {
    /** fight ctor */
  constructor(private translateService: TranslateService) {

    }
}
