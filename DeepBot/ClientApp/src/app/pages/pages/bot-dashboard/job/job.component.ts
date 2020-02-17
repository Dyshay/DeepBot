import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.scss']
})
/** job component*/
export class JobComponent {
    /** job ctor */
  constructor(private translateService: TranslateService) {

    }
}
