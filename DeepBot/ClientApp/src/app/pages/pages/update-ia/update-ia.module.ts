import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatSliderModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule,  MatPaginatorModule, MatSortModule, MatMenuModule, MatRippleModule, MatDialogModule, MatSidenavModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';

import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { ToastrModule } from 'ngx-toastr';
import { UpdateIaComponent } from './update-ia.component';
import { UpdateIaDataTableComponent } from './update-ia-data-table/update-ia-data-table.component';
import { UpdateIaRoutingModule } from './update-ia-routing.module';
import { ModalUpdateIaModule } from './modal-update-ia/modal-update-ia.module';


@NgModule({
  declarations: [ UpdateIaComponent, UpdateIaDataTableComponent],
  imports: [
    CommonModule,
    UpdateIaRoutingModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatCheckboxModule,
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
    ModalUpdateIaModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule,
    TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UpdateIaModule {
}
