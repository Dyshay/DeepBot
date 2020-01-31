import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { CreateAccountComponent } from './create-account.component';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatSliderModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondaryToolbarModule } from '../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    IconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    ContainerModule
  ]
})
export class CreateAccountModule {
}
