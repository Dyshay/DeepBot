import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Character } from '../../../../../webModel/Character';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
/** map component*/
export class MapComponent {
  @Input() character: Character
    /** map ctor */
  constructor(private translateService: TranslateService) {

    }
}
