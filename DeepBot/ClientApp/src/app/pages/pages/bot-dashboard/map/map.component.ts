import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
/** map component*/
export class MapComponent {
    /** map ctor */
  constructor(private translateService: TranslateService) {

    }
}
