import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { reducers } from '../path/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PathEffects } from './effects/path.effects';


@NgModule({
    imports: [
    StoreModule.forFeature('path', reducers),
    EffectsModule.forFeature([PathEffects])
    ],
})
export class pathModule {}
