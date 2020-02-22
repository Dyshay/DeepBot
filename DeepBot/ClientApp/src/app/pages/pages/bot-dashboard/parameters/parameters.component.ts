import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Character } from '../../../../../webModel/Character';

@Component({
    selector: 'app-parameters',
    templateUrl: './parameters.component.html',
    styleUrls: ['./parameters.component.scss']
})
/** parameters component*/
export class ParametersComponent {
  @Input() character: Character
    /** parameters ctor */
  constructor(private translateService: TranslateService) {

    }
}
