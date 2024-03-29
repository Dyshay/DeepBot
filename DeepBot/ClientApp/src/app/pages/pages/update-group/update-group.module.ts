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
import { UpdateGroupComponent } from './update-group.component';
import { UpdateGroupDataTableComponent } from './update-group-data-table/update-group-data-table.component';
import { UpdateGroupRoutingModule } from './update-group-routing.module';
import { ModalUpdateGroupModule } from './modal-update-group/modal-update-group.module';


@NgModule({
  declarations: [UpdateGroupComponent, UpdateGroupDataTableComponent],
  imports: [
    CommonModule,
    UpdateGroupRoutingModule,
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
    ModalUpdateGroupModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule,
    TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UpdateGroupModule {
}
