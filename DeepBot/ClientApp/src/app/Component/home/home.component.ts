import { AfterViewInit, ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LayoutService } from '../../../@vex/services/layout.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { Event, NavigationEnd, Router, Scroll } from '@angular/router';
import { filter, map, startWith, withLatestFrom } from 'rxjs/operators';
import { checkRouterChildsData } from '../../../@vex/utils/check-router-childs-data';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from '../../../@vex/services/config.service';
import theme from '../../../@vex/utils/tailwindcss';
import { SidebarComponent } from 'src/@vex/components/sidebar/sidebar.component';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../auth/reducers';
import { AuthActions } from '../auth/actions';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
    isFooterVisible$ = this.configService.config$.pipe(map(config => config.footer.visible));
    isDesktop$ = this.breakpointObserver.observe(`(min-width: ${theme.screens.lg})`).pipe(
        map(state => state.matches)
    );

    toolbarShadowEnabled$ = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        startWith(null),
        map(() => checkRouterChildsData(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled))
    );

    @ViewChild('configpanel', { static: true }) configpanel: SidebarComponent;

    constructor(private layoutService: LayoutService,
        private configService: ConfigService,
        private breakpointObserver: BreakpointObserver,
        private router: Router,
        private store: Store<fromAuth.State>
        ) { 
            this.store.dispatch(AuthActions.getUser());

        }

    ngOnInit() {
        // this.layoutService.configpanelOpen$.pipe(
        //     untilDestroyed(this)
        // ).subscribe(open => open ? this.configpanel.open() : this.configpanel.close());
    }

    ngOnDestroy(): void { }
}
