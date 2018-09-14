import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';

import { PrivacySettingsRoutingModule } from './privacy-settings-routing.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    SharedModule,
    PrivacySettingsRoutingModule
  ],
  declarations: [SettingsComponent]
})
export class PrivacySettingsModule { }
