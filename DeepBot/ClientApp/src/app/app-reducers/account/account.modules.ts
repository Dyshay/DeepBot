import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { reducers } from '../account/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './effects/account.effects';


@NgModule({
    imports: [
    StoreModule.forFeature('account', reducers),
    EffectsModule.forFeature([AccountEffects])
    ],
})
export class AccountModule {}
