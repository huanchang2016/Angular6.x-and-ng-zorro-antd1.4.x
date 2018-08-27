import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { ZhaopinRoutingModule } from './zhaopin-routing.module';
import { ZpHomeComponent } from './component/home/home.component';

@NgModule({
  imports: [
    SharedModule,
    ZhaopinRoutingModule
  ],
  declarations: [ZpHomeComponent]
})
export class ZhaopinModule { }
