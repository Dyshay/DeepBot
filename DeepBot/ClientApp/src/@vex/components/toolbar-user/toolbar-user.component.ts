import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { PopoverService } from '../popover/popover.service';
import { ToolbarUserDropdownComponent } from './toolbar-user-dropdown/toolbar-user-dropdown.component';
import icPerson from '@iconify/icons-ic/twotone-person';
import theme from '../../utils/tailwindcss';
import { Account } from 'src/webModel/Account';
import { User } from '../../../webModel/User';
import * as fromwebuser from 'src/app/app-reducers/webUser/reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'vex-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserComponent implements OnInit {

  dropdownOpen: boolean;
  icPerson = icPerson;

  theme = theme;
  user : User ;

  constructor(private popover: PopoverService,
    private storeUser: Store<fromwebuser.State>,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.storeUser.pipe(select(fromwebuser.getUser)).subscribe(
      (result) => {
        this.user = result;
      }
    );
  }

  showPopover(originRef: HTMLElement) {
    this.dropdownOpen = true;
    this.cd.markForCheck();

    const popoverRef = this.popover.open({
      content: ToolbarUserDropdownComponent,
      origin: originRef,
      offsetY: 12,
      position: [
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]
    });

    popoverRef.afterClosed$.subscribe(() => {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    });
  }
}
