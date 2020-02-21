import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatSliderModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule,  MatPaginatorModule, MatSortModule, MatMenuModule, MatRippleModule, MatDialogModule, MatSidenavModule, MatTabsModule, MatDivider, MatDividerModule, MatListModule, MatProgressBarModule, MatTooltipModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { BotDashboardComponent } from './bot-dashboard.component';
import { BotDashboardRoutingModule } from './bot-dashboard-routing.module';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterComponent } from './character/character.component';
import { FightComponent } from './fight/fight.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MapComponent } from './map/map.component';
import { ParametersComponent } from './parameters/parameters.component';
import { JobComponent } from './job/job.component';
import { ChartModule } from '../../../../@vex/components/chart/chart.module';
import { WidgetQuickLineChartModule } from '../../../../@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module';
import { WidgetQuickValueCenterModule } from '../../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module';
import { WidgetQuickValueStartModule } from '../../../../@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module';
import { WidgetLargeGoalChartModule } from '../../../../@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module';
import { WidgetAssistantModule } from '../../../../@vex/components/widgets/widget-assistant/widget-assistant.module';
import { WidgetLargeChartModule } from '../../../../@vex/components/widgets/widget-large-chart/widget-large-chart.module';
import { WidgetTableModule } from '../../../../@vex/components/widgets/widget-table/widget-table.module';
import { SecondaryToolbarModule } from '../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { JobPanelComponent } from './job/job-panel/job-panel.component';
import { ListeComponent } from '../../../generic-components/liste/liste.component';


@NgModule({
  declarations: [BotDashboardComponent, DashboardComponent, CharacterComponent, FightComponent, InventoryComponent, MapComponent, ParametersComponent, JobComponent, JobPanelComponent, ListeComponent],
  imports: [
    CommonModule,
    BotDashboardRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
    PageLayoutModule,
    FlexLayoutModule,
    MatSliderModule,
    MatTabsModule,
    IconModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
    MatProgressBarModule,
    MatListModule,
    ChartModule,
    MatIconModule,
    WidgetQuickLineChartModule,
    WidgetQuickValueCenterModule,
    WidgetQuickValueStartModule,
    WidgetLargeGoalChartModule,
    IconModule,
    WidgetAssistantModule,
    WidgetLargeChartModule,
    WidgetTableModule,
    SecondaryToolbarModule,
    MatButtonModule,
    PageLayoutModule,
    MatInputModule,
    ContainerModule,
    MatSelectModule,
    TranslateModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BotDashboardModule {
}
