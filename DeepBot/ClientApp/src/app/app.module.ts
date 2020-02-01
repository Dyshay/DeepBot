import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { AuthInterceptor } from './interceptor/auth.incerpetor';
import { UserService } from './services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS, metaReducers } from './reducers';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS, metaReducers } from './reducers';
import { AuthEffects } from './Component/auth/effects/auth.effects';
import { reducers } from './Component/auth/reducers';
import { AuthModule } from './Component/auth.module';
import { TalkService } from './service/TalkService';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),

    // Vex
    VexModule,
    CustomLayoutModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers, runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
    StoreDevtoolsModule.instrument({
      name: 'DeepBot',
      logOnly: environment.production

            // In a production build you would want to disable the Store Devtools
            // logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),
        RouterModule.forRoot([
            {
                path: 'login', component: LoginComponent, pathMatch: 'full',
            },
            {
                path: 'register', component: RegisterComponent, pathMatch: 'full',
            },
            {
                path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard]
            }
        ])

    ],
    providers: [UserService, {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }, TalkService],
    bootstrap: [AppComponent]
})
export class AppModule { }
