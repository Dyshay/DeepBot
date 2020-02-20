import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IconModule } from '@visurel/iconify-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { ModalUpdateGroupComponent } from './modal-update-group.component';
import { MatCheckboxModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [ModalUpdateGroupComponent],
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
    TranslateModule

  ],
  entryComponents: [ModalUpdateGroupComponent]
})
export class ModalUpdateGroupModule {
}
