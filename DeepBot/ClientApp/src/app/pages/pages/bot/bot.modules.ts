import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { reducers } from '../bot/reducers';
import { EffectsModule } from '@ngrx/effects';
import { BotEffects } from './effects/bot.effects';


@NgModule({
    imports: [
    StoreModule.forFeature('bot', reducers),
    EffectsModule.forFeature([BotEffects])
    ],
})
export class BotModule {}
