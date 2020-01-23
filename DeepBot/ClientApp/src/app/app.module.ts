import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatIconModule, MatSnackBarModule, MatTooltipModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Component/auth/login/login.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RegisterComponent } from './Component/auth/register/register.component';
import { HomeComponent } from './Component/home/home.component';
import { AuthGuard } from './guard/auth-guard.component';
import { UserService } from './Service/user.service';
import { AuthInterceptor } from './interceptor/auth.incerpetor';
import { HomeModule } from './Component/home/home.module';

@NgModule({
    declarations: [
        LoginComponent,
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        MatDividerModule,
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule,
        IconModule,
        MatTooltipModule,
        MatButtonModule,
        MatCheckboxModule,
        NgbModule,
        ModalModule.forRoot(),
        ToastrModule.forRoot(),
        MatInputModule,
        MatFormFieldModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,

        // Vex
        VexModule,
        HomeModule,
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
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
