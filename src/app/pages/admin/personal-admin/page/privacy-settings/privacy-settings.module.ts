import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacySettingsRoutingModule } from './privacy-settings-routing.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    PrivacySettingsRoutingModule
  ],
  declarations: [SettingsComponent]
})
export class PrivacySettingsModule { }
