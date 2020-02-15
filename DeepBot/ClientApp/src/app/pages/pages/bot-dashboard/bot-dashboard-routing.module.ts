import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { BotDashboardComponent } from './bot-dashboard.component';


const routes: VexRoutes = [
  {
    path: '',
    component: BotDashboardComponent ,
    data: {
      scrollDisabled:true,
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotDashboardRoutingModule {
}
