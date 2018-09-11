import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';

import { BasicInfoRoutingModule } from './basic-info-routing.module';
import { BasicInfoComponent } from './basic-info.component';

@NgModule({
  imports: [
    SharedModule,
    BasicInfoRoutingModule
  ],
  declarations: [BasicInfoComponent]
})
export class BasicInfoModule { }
