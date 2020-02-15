import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { UpdateAccountComponent } from './update-account.component';


const routes: VexRoutes = [
  {
    path: '',
    component: UpdateAccountComponent ,
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
export class UpdateAccountRoutingModule {
}
