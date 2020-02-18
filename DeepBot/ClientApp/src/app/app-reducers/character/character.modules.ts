import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { reducers } from '../character/reducers'; /* NIQUE SA MERE */ 
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from './effects/character.effects';


@NgModule({
    imports: [
    StoreModule.forFeature('character', reducers),
    EffectsModule.forFeature([CharacterEffects])
    ],
})
export class CharacterModule {}
