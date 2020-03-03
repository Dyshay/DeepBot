import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatSliderModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule, MatTableModule, MatDividerModule, MatMenuModule, MatDialogModule, MatChipsModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SecondaryToolbarModule } from '../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { ColorFadeModule } from '../../../../@vex/pipes/color/color-fade.module';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { TranslateModule } from '@ngx-translate/core';
import { CreatePathComponent } from './create-path.component';
import { CreatePathRoutingModule } from './create-path-routing.module';
import { MapBontaComponent } from './map-bonta/map-bonta.component';
import { MapBontaBanqueComponent } from './map-bonta-banque/map-bonta-banque.component';
import { MapBontaRetourComponent } from './map-bonta-retour/map-bonta-retour.component';
import { DialogZaapComponent } from './dialog-zaap/dialog-zaap.component';
import { DialogCellComponent } from './dialog-cell/dialog-cell.component';
import { DialogUseItemComponent } from './dialog-use-item/dialog-use-item.component';
import { DialogInteractionComponent } from './dialog-interaction/dialog-interaction.component';
import { DialogZaapiComponent } from './dialog-zaapi/dialog-zaapi.component';
import { DialogListActionComponent } from './dialog-list-action/dialog-list-action.component';


@NgModule({
  declarations: [CreatePathComponent, MapBontaComponent, MapBontaBanqueComponent,
    MapBontaRetourComponent, DialogZaapComponent,DialogZaapiComponent,DialogListActionComponent,
    DialogCellComponent, DialogUseItemComponent, DialogInteractionComponent],
  imports: [
    CommonModule,
    CreatePathRoutingModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatMenuModule,
    FlexLayoutModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    SecondaryToolbarModule,
    MatSelectModule,
    FormsModule,
    IconModule,
    MatDividerModule,
    MatChipsModule,
    MatAutocompleteModule,
    BreadcrumbsModule,
    ContainerModule,
    ColorFadeModule,
    PageLayoutModule,
    MatDialogModule,
    MatTableModule,
    TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [DialogZaapComponent, DialogCellComponent, DialogUseItemComponent, DialogListActionComponent, DialogInteractionComponent, DialogZaapiComponent]
})
export class CreatePathModule {
}
