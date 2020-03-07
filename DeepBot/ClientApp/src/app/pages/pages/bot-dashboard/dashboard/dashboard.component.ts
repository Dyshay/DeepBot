import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import theme from '../../../../../@vex/utils/tailwindcss';
import icKamas from '@iconify/icons-fa-solid/coins';
import icTimer from '@iconify/icons-ic/twotone-timer';
import icPOD from '@iconify/icons-mdi/weight';
import icExperience from '@iconify/icons-ic/baseline-timeline';
import { Character } from '../../../../../webModel/Character';
import * as fromAccount from '../../../../app-reducers/account/reducers';
import { LogMessage } from 'src/webModel/LogMessage';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
/** dashboard component*/
export class DashboardComponent implements OnInit {
    ngOnInit(): void {
    }

  @Input() kamas: number;
  @Input() character: Character;
  @Input() account: Account;
  @Input() logs: LogMessage[];
  @Input() experienceActual: string;
  @Input() experienceLevelUp: string;
  theme = theme;
  icKamas = icKamas;
  icTimer = icTimer;
  icExperience = icExperience;
  icPOD = icPOD;
    /** dashboard ctor */
    constructor(private translateService:TranslateService) {

    }
}
