import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard-page.component';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule, MatIconModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardPageRoutingModule, CommonModule, MatCardModule, MatDividerModule, MatIconModule, MatButtonModule, FlexLayoutModule, FlexModule, PageLayoutModule]
})
export class DashboardPModule { }
