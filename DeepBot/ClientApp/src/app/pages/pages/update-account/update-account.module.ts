import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatSliderModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule,  MatPaginatorModule, MatSortModule, MatMenuModule, MatRippleModule, MatDialogModule, MatSidenavModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAccountComponent } from './update-account.component';
import { UpdateAccountRoutingModule } from './update-account-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';
import { UpdateAccountDataTableComponent } from './update-account-data-table/update-account-data-table.component';
import { ModalUpdateAccountComponent } from './modal-update-account/modal-update-account.component';
import { ModalUpdateAccountModule } from './modal-update-account/modal-update-account.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [UpdateAccountComponent, UpdateAccountDataTableComponent],
  imports: [
    CommonModule,
    UpdateAccountRoutingModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatDialogModule,
    ScrollbarModule,
    ModalUpdateAccountModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule,
    TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UpdateAccountModule {
}
