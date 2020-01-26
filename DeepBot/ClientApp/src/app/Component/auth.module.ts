import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './auth/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/effects/auth.effects';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/@vex/layout/layout.module';
import { SidenavModule } from 'src/@vex/layout/sidenav/sidenav.module';
import { ToolbarModule } from 'src/@vex/layout/toolbar/toolbar.module';
import { FooterModule } from 'src/@vex/components/footer/footer.module';
import { ConfigPanelModule } from 'src/@vex/components/config-panel/config-panel.module';
import { SidebarModule } from 'src/@vex/components/sidebar/sidebar.module';
import { QuickpanelModule } from 'src/@vex/components/quickpanel/quickpanel.module';
import { MatCardModule } from '@angular/material';

export const COMPONENTS = [
    HomeComponent,
]

@NgModule({
    imports: [
        StoreModule.forFeature('auth', reducers), EffectsModule.forFeature([AuthEffects]),
        CommonModule,
        LayoutModule,
        SidenavModule,
        ToolbarModule,
        FooterModule,
        ConfigPanelModule,
        SidebarModule,
        QuickpanelModule,
        MatCardModule
    ],
    declarations: COMPONENTS,
})
export class AuthModule {}