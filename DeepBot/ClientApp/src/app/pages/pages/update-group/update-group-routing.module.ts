import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { UpdateGroupComponent } from './update-group.component';


const routes: VexRoutes = [
  {
    path: '',
    component: UpdateGroupComponent ,
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
export class UpdateGroupRoutingModule {
}
