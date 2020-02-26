import { Component, Input } from '@angular/core';
import { Group } from '../../../../../webModel/Group';

@Component({
    selector: 'app-group-fight',
    templateUrl: './group-fight.component.html',
    styleUrls: ['./group-fight.component.scss']
})
/** group-fight component*/
export class GroupFightComponent {
  @Input() group: Group;
    /** group-fight ctor */
    constructor() {

    }
}
