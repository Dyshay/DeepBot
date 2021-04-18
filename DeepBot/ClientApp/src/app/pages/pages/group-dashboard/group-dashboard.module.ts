import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatSliderModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule,  MatPaginatorModule, MatSortModule, MatMenuModule, MatRippleModule, MatDialogModule, MatSidenavModule, MatTabsModule, MatTooltipModule, MatProgressBarModule, MatListModule, MatDividerModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { GroupDashboardComponent } from './group-dashboard.component';
import { GroupDashboardRoutingModule } from './group-dashboard-routing.module';
import { DashboardGroupComponent } from './dashboard-group/dashboard-group.component';
import { GroupFightComponent } from './group-fight/group-fight.component';
import { GroupInventoryComponent } from './group-inventory/group-inventory.component';
import { GroupParametersComponent } from './group-parameters/group-parameters.component';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { ChartModule } from '../../../../@vex/components/chart/chart.module';
import { WidgetQuickLineChartModule } from '../../../../@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module';
import { WidgetQuickValueCenterModule } from '../../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module';
import { WidgetQuickValueStartModule } from '../../../../@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module';
import { WidgetLargeGoalChartModule } from '../../../../@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module';
import { WidgetAssistantModule } from '../../../../@vex/components/widgets/widget-assistant/widget-assistant.module';
import { WidgetLargeChartModule } from '../../../../@vex/components/widgets/widget-large-chart/widget-large-chart.module';
import { SecondaryToolbarModule } from '../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { WidgetTableModule } from '../../../../@vex/components/widgets/widget-table/widget-table.module';
import { ListeComponent } from '../../../generic-components/liste/liste.component';
import { ListeGroupComponent } from '../../../generic-components/liste/liste-group.component';


@NgModule({
  declarations: [GroupDashboardComponent, DashboardGroupComponent, GroupFightComponent, GroupInventoryComponent, GroupParametersComponent,ListeGroupComponent],
  imports: [
    CommonModule,
    GroupDashboardRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
    PageLayoutModule,
    FlexLayoutModule,
    MatSliderModule,
    MatTabsModule,
    IconModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatRippleModule,
    MatProgressBarModule,
    MatListModule,
    ChartModule,
    WidgetQuickLineChartModule,
    WidgetQuickValueCenterModule,
    WidgetQuickValueStartModule,
    WidgetLargeGoalChartModule,
    WidgetAssistantModule,
    WidgetLargeChartModule,
    WidgetTableModule,
    SecondaryToolbarModule,
    MatInputModule,
    ContainerModule,
    MatSelectModule,
    TranslateModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroupDashboardModule {
}
