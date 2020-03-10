import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapBontaComponent } from './app/pages/pages/create-path/map-bonta/map-bonta.component';
import { MapAmaknaComponent } from './app/pages/pages/create-path/map-amakna/map-amakna.component';
import { MapBontaBanqueComponent } from './app/pages/pages/create-path/map-bonta-banque/map-bonta-banque.component';
import { MapBontaRetourComponent } from './app/pages/pages/create-path/map-bonta-retour/map-bonta-retour.component';
import { MapCaniaAbraknydesRetourComponent } from './app/pages/pages/create-path/map-cania-abraknydes-retour/map-cania-abraknydes-retour.component';
import { MapCaniaAbraknydesBanqueComponent } from './app/pages/pages/create-path/map-cania-abraknydes-banque/map-cania-abraknydes-banque.component';
import { MapAmaknaRetourComponent } from './app/pages/pages/create-path/map-amakna-retour/map-amakna-retour.component';
import { DialogListActionComponent } from './app/pages/pages/create-path/dialog-list-action/dialog-list-action.component';
import { DialogZaapiComponent } from './app/pages/pages/create-path/dialog-zaapi/dialog-zaapi.component';
import { DialogZaapComponent } from './app/pages/pages/create-path/dialog-zaap/dialog-zaap.component';
import { MapAmaknaBanqueComponent } from './app/pages/pages/create-path/map-amakna-banque/map-amakna-banque.component';
import { MapCaniaAbraknydesComponent } from './app/pages/pages/create-path/map-cania-abraknydes/map-cania-abraknydes.component';
import { DialogUseItemComponent } from './app/pages/pages/create-path/dialog-use-item/dialog-use-item.component';
import { DialogInteractionComponent } from './app/pages/pages/create-path/dialog-interaction/dialog-interaction.component';
import { DialogCellComponent } from './app/pages/pages/create-path/dialog-cell/dialog-cell.component';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatIconModule, MatStepperModule, MatMenuModule, MatSliderModule, MatExpansionModule, MatInputModule, MatSlideToggleModule, MatCheckboxModule, MatButtonModule, MatDialogModule, MatTableModule, MatAutocompleteModule, MatChipsModule, MatDividerModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PageLayoutModule } from './@vex/components/page-layout/page-layout.module';
import { ColorFadeModule } from './@vex/pipes/color/color-fade.module';
import { BreadcrumbsModule } from './@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from './@vex/directives/container/container.module';
import { IconModule } from '@visurel/iconify-angular';
import { SecondaryToolbarModule } from './@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MapSidimoteComponent } from './app/pages/pages/create-path/map-sidimote/map-sidimote.component';
import { MapSidimoteBanqueComponent } from './app/pages/pages/create-path/map-sidimote-banque/map-sidimote-banque.component';
import { MapSidimoteRetourComponent } from './app/pages/pages/create-path/map-sidimote-retour/map-sidimote-retour.component';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatMenuModule,
    FlexLayoutModule,
    MatSliderModule,
    MatExpansionModule,
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
    TranslateModule],
declarations: [
    MapBontaComponent, MapBontaBanqueComponent, MapBontaRetourComponent,
    MapCaniaAbraknydesComponent, MapCaniaAbraknydesBanqueComponent, MapCaniaAbraknydesRetourComponent,
  MapAmaknaComponent, MapAmaknaBanqueComponent, MapAmaknaRetourComponent,
    MapSidimoteComponent, MapSidimoteBanqueComponent, MapSidimoteRetourComponent,
    DialogZaapComponent, DialogZaapiComponent, DialogListActionComponent,
    DialogCellComponent, DialogUseItemComponent, DialogInteractionComponent
  ],
  exports: [MapBontaComponent, MapBontaBanqueComponent, MapBontaRetourComponent,
    MapCaniaAbraknydesComponent, MapCaniaAbraknydesBanqueComponent, MapCaniaAbraknydesRetourComponent,
    MapAmaknaComponent, MapAmaknaBanqueComponent, MapAmaknaRetourComponent,
    MapSidimoteComponent, MapSidimoteBanqueComponent, MapSidimoteRetourComponent,
    DialogZaapComponent, DialogZaapiComponent, DialogListActionComponent,
    DialogCellComponent, DialogUseItemComponent, DialogInteractionComponent],
  entryComponents: [DialogZaapComponent, DialogCellComponent, DialogUseItemComponent, DialogListActionComponent, DialogInteractionComponent, DialogZaapiComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
