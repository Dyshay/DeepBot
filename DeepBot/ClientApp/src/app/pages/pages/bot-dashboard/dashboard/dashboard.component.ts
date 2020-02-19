import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import theme from '../../../../../@vex/utils/tailwindcss';
import icKamas from '@iconify/icons-fa-solid/coins';
import icTimer from '@iconify/icons-ic/twotone-timer';
import icPOD from '@iconify/icons-mdi/weight';
import icExperience from '@iconify/icons-ic/baseline-timeline';
import { Character } from '../../../../../webModel/Character';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
/** dashboard component*/
export class DashboardComponent {

  @Input() character: Character
  theme = theme;
  icKamas = icKamas;
  icTimer = icTimer;
  icExperience = icExperience;
  icPOD = icPOD;
    /** dashboard ctor */
    constructor(private translateService:TranslateService) {

    }
}
