import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { ShareBottomSheetModule } from '../../share-bottom-sheet/share-bottom-sheet.module';
import { ColorFadeModule } from '../../../pipes/color/color-fade.module';
import { MatProgressBarModule, MatTabsModule } from '@angular/material';
import { WidgetCharacterComponent } from './widget-character.component';


@NgModule({
  declarations: [WidgetCharacterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatTooltipModule,
    MatButtonModule,
    ShareBottomSheetModule,
    ColorFadeModule,
    MatProgressBarModule,
    MatTabsModule
  ],
  exports: [WidgetCharacterComponent]
})
export class WidgetCharacterModule {
}

