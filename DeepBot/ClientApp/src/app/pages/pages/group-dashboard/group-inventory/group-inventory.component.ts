import { Component, Input } from '@angular/core';
import { Group } from '../../../../../webModel/Group';

@Component({
    selector: 'app-group-inventory',
    templateUrl: './group-inventory.component.html',
    styleUrls: ['./group-inventory.component.scss']
})
/** group-inventory component*/
export class GroupInventoryComponent {
  @Input() group: Group;
    /** group-inventory ctor */
    constructor() {

    }
}
