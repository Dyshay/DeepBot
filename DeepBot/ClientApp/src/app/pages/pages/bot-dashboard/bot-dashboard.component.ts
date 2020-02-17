import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import icWork from '@iconify/icons-ic/twotone-work';
import icPhone from '@iconify/icons-ic/twotone-phone';
import { friendSuggestions } from '../../../../static-data/friend-suggestions';
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

import { Link } from '../../../../@vex/interfaces/link.interface';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../auth/reducers';
import { User } from '../../../../webModel/User';
import { Character } from '../../../../webModel/Character';
import { TranslateService } from '@ngx-translate/core';
import { Icon } from '@visurel/iconify-angular';
import { MatTabChangeEvent } from '@angular/material';

export interface FriendSuggestion {
  name: string;
  imageSrc: string;
  friends: number;
  added: boolean;
}

@Component({
    selector: 'app-bot-dashboard',
    templateUrl: './bot-dashboard.component.html',
  styleUrls: ['./bot-dashboard.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})
/** bot-dashboard component*/
export class BotDashboardComponent implements OnInit {
  character: Character;
  indexSelected: number = 0;
    /** bot-dashboard ctor */
  constructor(private activatedRoute: ActivatedRoute, private store: Store<fromAuth.State>, private translateService : TranslateService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.store.pipe(select(fromAuth.getUserConnected)).subscribe(
        (result: User) => {
          for (var i = 0; i < result.accounts.length; i++) {
            if (result.accounts[i].currentCharacter.key.toString() == params.get('id'))
              this.character = result.accounts[i].currentCharacter;
          }
        })
    });
  }

  links: Link[] = [
    {
      label: this.translateService.instant('GLOBAL.DASHBOARD'),
      route: 'dashboard',
      icon: icTableaudeBord
    },
    {
      label: this.translateService.instant('DASHBOARDBOT.CHARACTER'),
      route: 'character',
      icon: icPersonnage
    },
    {
      label: this.translateService.instant('DASHBOARDBOT.FIGHT'),
      route: 'fight',
      icon: icCombat
    },
    {
      label: this.translateService.instant('DASHBOARDBOT.JOB'),
      route: 'job',
      icon: icJob
    },
    {
      label: this.translateService.instant('DASHBOARDBOT.INVENTORY'),
      route: 'inventory',
      icon: icInventory
    },
    {
      label: this.translateService.instant('DASHBOARDBOT.MAP'),
      route: 'map',
      icon: icMap
    },
    {
      label: this.translateService.instant('DASHBOARDBOT.PARAMETERS'),
      route: 'setting',
      icon: icSetting
    }
  ];

  suggestions = friendSuggestions;

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
      case 4:
        this.indexSelected = 4;
        break;
      case 5:
        this.indexSelected = 5;
        break;
      case 6:
        this.indexSelected = 6;
        break;

      default:
        break;
    }
  }
 
}
