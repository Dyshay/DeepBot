import { Component, OnInit, OnChanges } from '@angular/core';
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
import icPause from '@iconify/icons-ic/outline-pause-circle-outline'

import { Link } from '../../../../@vex/interfaces/link.interface';
import { Store, select } from '@ngrx/store';
import * as fromCharacter from 'src/app/app-reducers/character/reducers';
import * as fromGroup from 'src/app/app-reducers/group/reducers';
import { Character } from '../../../../webModel/Character';
import { TranslateService } from '@ngx-translate/core';
import { Icon } from '@visurel/iconify-angular';
import { MatTabChangeEvent } from '@angular/material';
import { TalkService } from 'src/app/Services/TalkService';
import * as fromAccount from '../../../app-reducers/account/reducers';
import * as fromWeb from '../../../app-reducers/webUser/reducers';
import { webUserActions } from '../../../app-reducers/webUser/actions';
import { LogMessage } from 'src/webModel/LogMessage';
import { Account } from 'src/webModel/Account';
import { CharacterService } from '../../../services/character.service';
import { Group } from '../../../../webModel/Group';
import { CharacterActions } from 'src/app/app-reducers/character/actions';
import { AccountActions } from 'src/app/app-reducers/account/actions';

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
export class BotDashboardComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('test');
  }
  account = this.accountStore.pipe(select(fromAccount.getCurrentAccount));
  character: Character = new Character();
  indexSelected: number = 0;
  iconCharacter: string;
  groupName: string = '';
  // logs$ = this.accountStore.pipe(select(fromAccount.getLogs));
  logs$ = this.characterStore.pipe(select(fromCharacter.getCurrentlogs));
  map$ = this.accountStore.pipe(select(fromAccount.getMap));
  characteristics$ = this.characterStore.pipe(select(fromCharacter.getCharacteristics));
  connectedAccounts$ = this.webUser.pipe(select(fromWeb.getConnectedBot));
  kamas$ = this.characterStore.pipe(select(fromCharacter.getKamas));
  characteristicsPoints$ = this.characterStore.pipe(select(fromCharacter.getCharacteristicsPoints));
  /** bot-dashboard ctor */
  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService,
    private groupStore: Store<fromGroup.State>,
    private store: Store<fromCharacter.State>, private translateService: TranslateService, private deeptalk: TalkService,
    private accountStore: Store<fromAccount.State>, private characterStore: Store<fromCharacter.State>, private webUser: Store<fromWeb.State>) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.deeptalk.FetchTcpId(Number.parseInt(params.get('id')));
      this.store.pipe(select(fromCharacter.getAllCurrentCharacters)).subscribe(
        (result: Character[]) => {
          for (var i = 0; i < result.length; i++) {
            if (result[i].key.toString() == params.get('id')) {
              this.character = result[i];
              this.accountStore.pipe(select(fromAccount.getAllAccounts)).subscribe((accountStoring: Account[]) => {
                for (let c = 0; c < accountStoring.length; c++) {
                  if (accountStoring[c].currentCharacter.key === this.character.key) {
                    this.characterStore.dispatch(CharacterActions.updateAccount({ character: this.character, tcpId: this.character.key.toString() }));
                    this.accountStore.dispatch(AccountActions.updateCurrentAccount({id: result[i].key}));
                  }

                }

              })
            }
            this.iconCharacter = this.characterService.getCharacterIcon(this.character.breedId);
            if (this.character.fk_Group != '00000000-0000-0000-0000-000000000000') {
              this.groupStore.pipe(select(fromGroup.getAllGroups)).subscribe(
                (result: Group[]) => {
                  if (result.find(o => o.key == this.character.fk_Group).name !== undefined)
                    this.groupName = result.find(o => o.key == this.character.fk_Group).name;
                }
              );

            }
          }
        })
    });
  }



  initConnection(acc: Account) {
      this.deeptalk.createConnexionBot(acc.accountName, acc.password, acc.server.id, false);
      this.deeptalk.FetchTcpId(this.character.key);
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
  icPause = icPause;

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
