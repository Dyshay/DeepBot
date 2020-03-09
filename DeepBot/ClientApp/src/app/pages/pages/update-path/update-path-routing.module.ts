import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { UpdatePathComponent } from './update-path.component';


const routes: VexRoutes = [
  {
    path: '',
    component: UpdatePathComponent ,
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
export class UpdatePathRoutingModule {
}
