import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/@vex/layout/layout.module';
import { SidenavModule } from 'src/@vex/layout/sidenav/sidenav.module';
import { ToolbarModule } from 'src/@vex/layout/toolbar/toolbar.module';
import { FooterModule } from 'src/@vex/components/footer/footer.module';
import { ConfigPanelModule } from 'src/@vex/components/config-panel/config-panel.module';
import { SidebarModule } from 'src/@vex/components/sidebar/sidebar.module';
import { QuickpanelModule } from 'src/@vex/components/quickpanel/quickpanel.module';
import { MatCardModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { DialogResultRegisterComponent } from './register/dialog-result-register/dialog-result-register.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DialogResultRegisterComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SidenavModule,
    ToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    FooterModule,
    MatButtonModule,
    ConfigPanelModule,
    SidebarModule,
    QuickpanelModule,
    MatCardModule
  ],
  entryComponents: [DialogResultRegisterComponent]
})
export class AuthModule { }
