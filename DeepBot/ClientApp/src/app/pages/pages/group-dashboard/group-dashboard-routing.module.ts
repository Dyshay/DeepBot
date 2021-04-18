import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { GroupDashboardComponent } from './group-dashboard.component';


const routes: VexRoutes = [
  {
    path: '',
    component: GroupDashboardComponent ,
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
export class GroupDashboardRoutingModule {
}
