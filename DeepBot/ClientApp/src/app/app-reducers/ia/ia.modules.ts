import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { reducers } from '../ia/reducers';
import { EffectsModule } from '@ngrx/effects';
import { IaEffects } from './effects/ia.effects';


@NgModule({
    imports: [
    StoreModule.forFeature('ia', reducers),
    EffectsModule.forFeature([IaEffects])
    ],
})
export class IaModule {}
