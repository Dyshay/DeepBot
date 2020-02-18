import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { reducers } from '../webUser/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GroupEffects } from './effects/group.effects'


@NgModule({
    imports: [
    StoreModule.forFeature('group', reducers),
    EffectsModule.forFeature([GroupEffects])
    ],
})
export class groupModule {}
