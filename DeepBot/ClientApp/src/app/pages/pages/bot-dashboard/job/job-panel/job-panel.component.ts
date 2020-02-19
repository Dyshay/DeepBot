import { Component, Input } from '@angular/core';
import { Job } from '../../../../../../webModel/Job';
import { Character } from '../../../../../../webModel/Character';

@Component({
    selector: 'app-job-panel',
    templateUrl: './job-panel.component.html',
    styleUrls: ['./job-panel.component.scss']
})
/** job-panel component*/
export class JobPanelComponent {
  @Input() jobSelected: Job
    /** job-panel ctor */
    constructor() {

    }
}
