import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IconModule } from '@visurel/iconify-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { MatCheckboxModule, MatTableModule, MatStepperModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';
import { ModalUpdateIaComponent } from './modal-update-ia.component';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { ColorFadeModule } from '../../../../../@vex/pipes/color/color-fade.module';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { SharedModule } from '../../../../../shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ModalUpdateIaComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    MatTableModule,
    IconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    TranslateModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatMenuModule,
    MatStepperModule,
    DragDropModule,
    MatDialogModule,
    MatDividerModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    SecondaryToolbarModule,
    MatSelectModule,
    IconModule,
    BreadcrumbsModule,
    ContainerModule,
    ColorFadeModule,
    PageLayoutModule,
    MatTableModule,
    TranslateModule

  ],
  entryComponents: [ModalUpdateIaComponent]
})
export class ModalUpdateIaModule {
}
