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
import { MatCheckboxModule, MatTableModule, MatStepperModule, MatListModule, MatSliderModule, MatSlideToggleModule, MatExpansionModule } from '@angular/material';
import { ModalUpdatePathComponent } from './modal-update-path.component';
import { MapBontaComponent } from '../../create-path/map-bonta/map-bonta.component';
import { MapBontaBanqueComponent } from '../../create-path/map-bonta-banque/map-bonta-banque.component';
import { DialogUseItemComponent } from '../../create-path/dialog-use-item/dialog-use-item.component';
import { DialogInteractionComponent } from '../../create-path/dialog-interaction/dialog-interaction.component';
import { MapAmaknaRetourComponent } from '../../create-path/map-amakna-retour/map-amakna-retour.component';
import { MapAmaknaBanqueComponent } from '../../create-path/map-amakna-banque/map-amakna-banque.component';
import { DialogZaapiComponent } from '../../create-path/dialog-zaapi/dialog-zaapi.component';
import { DialogZaapComponent } from '../../create-path/dialog-zaap/dialog-zaap.component';
import { MapAmaknaComponent } from '../../create-path/map-amakna/map-amakna.component';
import { MapCaniaAbraknydesComponent } from '../../create-path/map-cania-abraknydes/map-cania-abraknydes.component';
import { MapCaniaAbraknydesBanqueComponent } from '../../create-path/map-cania-abraknydes-banque/map-cania-abraknydes-banque.component';
import { MapBontaRetourComponent } from '../../create-path/map-bonta-retour/map-bonta-retour.component';
import { MapCaniaAbraknydesRetourComponent } from '../../create-path/map-cania-abraknydes-retour/map-cania-abraknydes-retour.component';
import { DialogListActionComponent } from '../../create-path/dialog-list-action/dialog-list-action.component';
import { DialogCellComponent } from '../../create-path/dialog-cell/dialog-cell.component';
import { SharedModule } from '../../../../../shared.module';
import { WidgetQuickValueCenterModule } from '../../../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module';

@NgModule({
  declarations: [ModalUpdatePathComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatSliderModule,
    MatSlideToggleModule,
    WidgetQuickValueCenterModule,
    MatTableModule,
    IconModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    TranslateModule,
    SharedModule
  ],
  entryComponents: [ModalUpdatePathComponent]
})
export class ModalUpdatePathModule {
}
