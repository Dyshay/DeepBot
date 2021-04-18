import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatSliderModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule,  MatPaginatorModule, MatSortModule, MatMenuModule, MatRippleModule, MatDialogModule, MatSidenavModule, MatHorizontalStepper } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { ToastrModule } from 'ngx-toastr';
import { UpdatePathRoutingModule } from './update-path-routing.module';
import { UpdatePathComponent } from './update-path.component';
import { UpdatePathDataTableComponent } from './update-path-data-table/update-path-data-table.component';
import { ModalUpdatePathComponent } from './modal-update-path/modal-update-path.component';
import { ModalUpdatePathModule } from './modal-update-path/modal-update-path.module';
import { MapBontaComponent } from '../create-path/map-bonta/map-bonta.component';
import { MapAmaknaComponent } from '../create-path/map-amakna/map-amakna.component';
import { DialogZaapiComponent } from '../create-path/dialog-zaapi/dialog-zaapi.component';
import { MapBontaBanqueComponent } from '../create-path/map-bonta-banque/map-bonta-banque.component';
import { MapBontaRetourComponent } from '../create-path/map-bonta-retour/map-bonta-retour.component';
import { MapCaniaAbraknydesRetourComponent } from '../create-path/map-cania-abraknydes-retour/map-cania-abraknydes-retour.component';
import { DialogListActionComponent } from '../create-path/dialog-list-action/dialog-list-action.component';
import { DialogInteractionComponent } from '../create-path/dialog-interaction/dialog-interaction.component';
import { MapAmaknaRetourComponent } from '../create-path/map-amakna-retour/map-amakna-retour.component';
import { MapCaniaAbraknydesBanqueComponent } from '../create-path/map-cania-abraknydes-banque/map-cania-abraknydes-banque.component';
import { MapAmaknaBanqueComponent } from '../create-path/map-amakna-banque/map-amakna-banque.component';
import { DialogUseItemComponent } from '../create-path/dialog-use-item/dialog-use-item.component';
import { DialogZaapComponent } from '../create-path/dialog-zaap/dialog-zaap.component';
import { MapCaniaAbraknydesComponent } from '../create-path/map-cania-abraknydes/map-cania-abraknydes.component';
import { DialogCellComponent } from '../create-path/dialog-cell/dialog-cell.component';
import { SharedModule } from '../../../../shared.module';


@NgModule({
  declarations: [UpdatePathComponent, UpdatePathDataTableComponent],
  imports: [
    CommonModule,
    UpdatePathRoutingModule,
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
    ReactiveFormsModule,
    ModalUpdatePathModule,
    ContainerModule,
    MatSidenavModule,
    TranslateModule,
    MatStepperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UpdatePathModule {
}
