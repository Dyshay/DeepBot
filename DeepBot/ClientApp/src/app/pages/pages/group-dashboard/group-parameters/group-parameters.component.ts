import { Component, Input } from '@angular/core';
import { Group } from '../../../../../webModel/Group';
import * as fromGroup from 'src/app/app-reducers/group/reducers'
import { GroupActions } from 'src/app/app-reducers/group/actions';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import icSave from '@iconify/icons-ic/outline-save';
import icImport from '@iconify/icons-mdi/file-import-outline';

@Component({
    selector: 'app-group-parameters',
    templateUrl: './group-parameters.component.html',
    styleUrls: ['./group-parameters.component.scss']
})
/** group-parameters component*/
export class GroupParametersComponent {
  @Input() group: Group;
  icSave = icSave;
  icImport = icImport;
    /** group-parameters ctor */
  constructor(private translateService: TranslateService, private storeGroup: Store<fromGroup.State>) {

  }

  Save() {
    let groupConfigToUpdate = this.group.config;
    this.storeGroup.dispatch(GroupActions.updateGroupConfig({ groupConfigToUpdate }));
  }

  Import() {

  }
}
