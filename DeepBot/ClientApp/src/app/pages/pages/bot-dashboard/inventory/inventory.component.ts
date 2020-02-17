import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
/** inventory component*/
export class InventoryComponent {
    /** inventory ctor */
  constructor(private translateService: TranslateService) {

    }
}
