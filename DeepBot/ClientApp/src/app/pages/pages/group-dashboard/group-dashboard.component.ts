import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromGroup from 'src/app/app-reducers/group/reducers';
import { Group } from '../../../../webModel/Group';

import icWork from '@iconify/icons-ic/twotone-work';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icCheck from '@iconify/icons-ic/twotone-check';
import icMail from '@iconify/icons-ic/twotone-mail';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icAdd from '@iconify/icons-ic/twotone-add';
import icWhatshot from '@iconify/icons-ic/twotone-whatshot';
import icTableaudeBord from '@iconify/icons-ic/baseline-dashboard';
import icPersonnage from '@iconify/icons-fa-solid/user';
import icCombat from '@iconify/icons-mdi/sword-cross';
import icJob from '@iconify/icons-ic/twotone-work';
import icInventory from '@iconify/icons-fa-solid/box-open';
import icMap from '@iconify/icons-fa-solid/map-marked-alt';
import icSetting from '@iconify/icons-ic/outline-settings';
import icToConnect from '@iconify/icons-ic/baseline-log-in';
import icToDisconnect from '@iconify/icons-ic/baseline-log-out'
import icPause from '@iconify/icons-ic/outline-pause-circle-outline'
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { TranslateService } from '@ngx-translate/core';
import { Link } from '../../../../@vex/interfaces/link.interface';
import { MatTabChangeEvent } from '@angular/material';

@Component({
    selector: 'app-group-dashboard',
    templateUrl: './group-dashboard.component.html',
  styleUrls: ['./group-dashboard.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})
/** group-dashboard component*/
export class GroupDashboardComponent {
  id: number;
  group: Group;
  indexSelected: number = 0;

  icWork = icWork;
  icPhone = icPhone;
  icPersonAdd = icPersonAdd;
  icCheck = icCheck;
  icMail = icMail;
  icAccessTime = icAccessTime;
  icAdd = icAdd;
  icWhatshot = icWhatshot;
  icTableaudeBord = icTableaudeBord;
  icPersonnage = icPersonnage;
  icCombat = icCombat;
  icJob = icJob;
  icInventory = icInventory;
  icMap = icMap;
  icSetting = icSetting;
  icToConnect = icToConnect;
  icToDisconnect = icToDisconnect;
  icPause = icPause;

  links: Link[] = [
    {
      label: this.translateService.instant('GLOBAL.DASHBOARD'),
      route: 'dashboard',
      icon: icTableaudeBord
    },
    {
      label: this.translateService.instant('DASHBOARDBOT.FIGHT'),
      route: 'fight',
      icon: icCombat
    },
    {
      label: this.translateService.instant('DASHBOARDBOT.INVENTORY'),
      route: 'inventory',
      icon: icInventory
    },
    {
      label: this.translateService.instant('DASHBOARDBOT.PARAMETERS'),
      route: 'setting',
      icon: icSetting
    }
  ];

    /** group-dashboard ctor */
  constructor(private activatedRoute: ActivatedRoute, private translateService: TranslateService, private groupStore: Store<fromGroup.State>,) {

    }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.groupStore.pipe(select(fromGroup.getAllGroups)).subscribe(
        (result: Group[]) => {
          this.group = result.find(o => o.key == params.get('id'));
          console.log(this.group);
        })
    });
  }


  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    switch (tabChangeEvent.index) {
      case 0:
        this.indexSelected = 0;
        break;
      case 1:
        this.indexSelected = 1;
        break;
      case 2:
        this.indexSelected = 2;
        break;
      case 3:
        this.indexSelected = 3;
        break;

      default:
        break;
    }
  }
}
