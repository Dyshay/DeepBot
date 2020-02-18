import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { reducers } from '../webUser/reducers';
import { EffectsModule } from '@ngrx/effects';
import { webUserEffects } from './effects/webUser.effects'


@NgModule({
    imports: [
    StoreModule.forFeature('webUser', reducers),
    EffectsModule.forFeature([webUserEffects])
    ],
})
export class webUserModule {}
