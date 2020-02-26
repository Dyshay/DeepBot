import { Component, Input } from '@angular/core';
import { Group } from '../../../../../webModel/Group';
import icSave from '@iconify/icons-ic/outline-save';
import icImport from '@iconify/icons-mdi/file-import-outline';
import { TranslateService } from '@ngx-translate/core';
import * as fromGroup from 'src/app/app-reducers/group/reducers'
import { GroupActions } from 'src/app/app-reducers/group/actions';
import { Store } from '@ngrx/store';


@Component({
    selector: 'app-group-fight',
    templateUrl: './group-fight.component.html',
    styleUrls: ['./group-fight.component.scss']
})
/** group-fight component*/
export class GroupFightComponent {
  @Input() group: Group;
  icSave = icSave;
  icImport = icImport;
    /** group-fight ctor */
  constructor(private translateService: TranslateService, private storeGroup: Store<fromGroup.State>) {

  }

  Save() {
    let groupConfigToUpdate = this.group.config;
    this.storeGroup.dispatch(GroupActions.updateGroupConfig({ groupConfigToUpdate }));
  }
  Import() {

  }
}
