import { Component, Input } from '@angular/core';
import { Group } from '../../../../../webModel/Group';

@Component({
    selector: 'app-group-parameters',
    templateUrl: './group-parameters.component.html',
    styleUrls: ['./group-parameters.component.scss']
})
/** group-parameters component*/
export class GroupParametersComponent {
  @Input() group: Group;
    /** group-parameters ctor */
    constructor() {

    }
}
