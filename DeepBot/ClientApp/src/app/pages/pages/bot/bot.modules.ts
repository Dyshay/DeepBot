import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { reducers } from '../bot/reducers';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
    imports: [
        StoreModule.forFeature('bot', reducers),
    ],
})
export class BotModule {}