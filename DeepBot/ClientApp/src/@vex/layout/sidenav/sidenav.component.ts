import { Component, Input, OnInit } from '@angular/core';
import { trackByRoute } from '../../utils/track-by';
import { NavigationService } from '../../services/navigation.service';
import icRadioButtonChecked from '@iconify/icons-ic/twotone-radio-button-checked';
import icRadioButtonUnchecked from '@iconify/icons-ic/twotone-radio-button-unchecked';
import { LayoutService } from '../../services/layout.service';
import { ConfigService } from '../../services/config.service';
import * as fromWeb from '../../../app/app-reducers/webUser/reducers';
import * as WebActions from '../../../app/app-reducers/webUser/actions';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'vex-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() collapsed: boolean;
  collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
  title$ = this.configService.config$.pipe(map(config => config.sidenav.title));
  imageUrl$ = this.configService.config$.pipe(map(config => config.sidenav.imageUrl));
  showCollapsePin$ = this.configService.config$.pipe(map(config => config.sidenav.showCollapsePin));

  items = this.webStore.pipe(select(fromWeb.getSideNav));

  trackByRoute = trackByRoute;
  icRadioButtonChecked = icRadioButtonChecked;
  icRadioButtonUnchecked = icRadioButtonUnchecked;

  constructor(private navigationService: NavigationService,
              private layoutService: LayoutService,
              private configService: ConfigService, private webStore: Store<fromWeb.State>) { }

  ngOnInit() {
    this.webStore.dispatch(WebActions.webUserActions.getBotNav());
  }

  onMouseEnter() {
    this.layoutService.collapseOpenSidenav();
  }

  onMouseLeave() {
    this.layoutService.collapseCloseSidenav();
  }

  toggleCollapse() {
    this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }
}
