import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';
import { AppComponent } from '../../../../app.component';
import { AuthModule } from '../auth.modules';


const routes: VexRoutes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
