import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-parameters',
    templateUrl: './parameters.component.html',
    styleUrls: ['./parameters.component.scss']
})
/** parameters component*/
export class ParametersComponent {
    /** parameters ctor */
  constructor(private translateService: TranslateService) {

    }
}
