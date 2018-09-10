import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';



const CORECOMPONENT = [
  WebComponent
];
@NgModule({
  imports: [
    SharedModule,
    WebRoutingModule,
  ],
  declarations: [
    ...CORECOMPONENT
  ]
})
export class WebModule { }
