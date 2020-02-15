import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { trackById } from '../../../utils/track-by';
import icPerson from '@iconify/icons-ic/twotone-person';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icDoNotDisturb from '@iconify/icons-ic/twotone-do-not-disturb';
import icOfflineBolt from '@iconify/icons-ic/twotone-offline-bolt';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icMoveToInbox from '@iconify/icons-ic/twotone-move-to-inbox';
import icListAlt from '@iconify/icons-ic/twotone-list-alt';
import icTableChart from '@iconify/icons-ic/twotone-table-chart';
import icVerifiedUser from '@iconify/icons-ic/twotone-verified-user';
import icLock from '@iconify/icons-ic/twotone-lock';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';
import { Icon } from '@visurel/iconify-angular';
import { PopoverRef } from '../../popover/popover-ref';
import checkCircle from '@iconify/icons-fa-solid/check-circle';
import exclamationCircle from '@iconify/icons-fa-solid/exclamation-circle';
import keyIcon from '@iconify/icons-fa-solid/key';
import * as fromAuth from '../../../../app/pages/pages/auth/reducers';
import { Store, select } from '@ngrx/store';
import { AuthActions } from 'src/app/pages/pages/auth/actions';
import { TranslateService } from '@ngx-translate/core';

export interface OnlineStatus {
  id: 'online' | 'away' | 'dnd' | 'offline';
  label: string;
  icon: Icon;
  colorClass: string;
}

@Component({
  selector: 'vex-toolbar-user-dropdown',
  templateUrl: './toolbar-user-dropdown.component.html',
  styleUrls: ['./toolbar-user-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserDropdownComponent implements OnInit {

  items: MenuItem[] = [
    {
      id: '1',
      icon: icAccountCircle,
      label: this.translate.instant('USERPANEL.PROFIL'),
      description: this.translate.instant('USERPANEL.PROFILDESCRIPTION'),
      colorClass: 'text-teal-500',
      route: '/pages/profile'
    },
    {
      id: '2',
      icon: icMoveToInbox,
      label: this.translate.instant('USERPANEL.INBOX'),
      description: this.translate.instant('USERPANEL.INBOXDESCRIPTION'),
      colorClass: 'text-primary-500',
      route: '/apps/chat'
    },
    {
      id: '4',
      icon: icTableChart,
      label: this.translate.instant('USERPANEL.SUBSCRIPTION'),
      description: this.translate.instant('USERPANEL.SUBSCRIPTIONDESCRIPTION'),
      colorClass: 'text-purple-500',
      route: '/pages/pricing'
    }
  ];

  statuses: OnlineStatus[] = [
    {
      id: 'online',
      label: 'Online',
      icon: icCheckCircle,
      colorClass: 'text-green-500'
    },
    {
      id: 'away',
      label: 'Away',
      icon: icAccessTime,
      colorClass: 'text-orange-500'
    },
    {
      id: 'dnd',
      label: 'Do not disturb',
      icon: icDoNotDisturb,
      colorClass: 'text-red-500'
    },
    {
      id: 'offline',
      label: 'Offline',
      icon: icOfflineBolt,
      colorClass: 'text-gray-500'
    }
  ];

  activeStatus: OnlineStatus = this.statuses[0];

  isCopy: boolean = false;
  checkCircle = checkCircle;
  trackById = trackById;
  icPerson = icPerson;
  icSettings = icSettings;
  icChevronRight = icChevronRight;
  icArrowDropDown = icArrowDropDown;
  exclamationCircle = exclamationCircle;
  icBusiness = icBusiness;
  icVerifiedUser = icVerifiedUser;
  icLock = icLock;
  keyIcon = keyIcon;
  icNotificationsOff = icNotificationsOff;

  user = this.store.pipe(select(fromAuth.getUser));

  constructor(private cd: ChangeDetectorRef,
              private popoverRef: PopoverRef<ToolbarUserDropdownComponent>,
    private store: Store<fromAuth.State>,
    private translate: TranslateService
          ) { 
                this.store.dispatch(AuthActions.getUser());

              }

  ngOnInit() {
  }

  setStatus(status: OnlineStatus) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }

  close() {
    this.popoverRef.close();
  }
}
