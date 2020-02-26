import { Component, Inject, LOCALE_ID, Renderer2, OnInit } from '@angular/core';
import { ConfigService } from '../@vex/services/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icDateRange from '@iconify/icons-ic/twotone-date-range';
import icChat from '@iconify/icons-ic/twotone-chat';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icLock from '@iconify/icons-ic/twotone-lock';
import icWatchLater from '@iconify/icons-ic/twotone-watch-later';
import icError from '@iconify/icons-ic/twotone-error';
import icAttachMoney from '@iconify/icons-ic/twotone-attach-money';
import icPersonOutline from '@iconify/icons-ic/twotone-person-outline';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icHelp from '@iconify/icons-ic/twotone-help';
import icBook from '@iconify/icons-ic/twotone-book';
import icBubbleChart from '@iconify/icons-ic/twotone-bubble-chart';
import icFormatColorText from '@iconify/icons-ic/twotone-format-color-text';
import icStar from '@iconify/icons-ic/twotone-star';
import icViewCompact from '@iconify/icons-ic/twotone-view-compact';
import icPictureInPicture from '@iconify/icons-ic/twotone-picture-in-picture';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { LayoutService } from '../@vex/services/layout.service';
import icUpdate from '@iconify/icons-ic/twotone-update';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { Style, StyleService } from '../@vex/services/style.service';
import theme from '../@vex/utils/tailwindcss';
import icChromeReaderMode from '@iconify/icons-ic/twotone-chrome-reader-mode';
import { ConfigName } from '../@vex/interfaces/config-name.model';
import { TraductionService } from './services/traduction.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
import { Spinkit } from 'ng-http-loader';
import { Store } from '@ngrx/store';
import * as fromwebuser from './app-reducers/webUser/reducers';
import * as fromAccount from './app-reducers/account/reducers';
import * as fromGroup from './app-reducers/group/reducers';
import { webUserActions } from './app-reducers/webUser/actions';
import { AccountActions } from './app-reducers/account/actions';
import { GroupActions } from './app-reducers/group/actions';
import { UserService } from './services/user.service';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DeppBot';
  public spinkit = Spinkit;

  constructor(private configService: ConfigService,
    private styleService: StyleService,
    private renderer: Renderer2,
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private localeId: string,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    tradService: TraductionService,
    private translate: TranslateService,
    private userService: UserService,
    config: NgSelectConfig,
    private storeUser: Store<fromwebuser.State>,
    private storeGroup: Store<fromGroup.State>,
    private storeAccount: Store<fromAccount.State>,
    private splashScreenService: SplashScreenService,
    private router: Router
  ) {

    translate.setDefaultLang('fr');
    translate.currentLang = 'fr';

    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }



    this.configService.updateConfig({
      sidenav: {
        title: 'DeepBot',
        imageUrl: 'assets/img/logo/logo-rounded.svg',
        showCollapsePin: false
      },
      footer: {
        visible: false
      }
    });

  }
  async ngOnInit() {
    if (await this.userService.isConnected()) {
      this.storeUser.dispatch(webUserActions.getUser());
      this.storeGroup.dispatch(GroupActions.getAllGroups());
      this.navigationService.GenerateNavigation();
    }
    else {
      this.userService.logout();
      this.router.navigate(['/login']);
    }
  }
}
