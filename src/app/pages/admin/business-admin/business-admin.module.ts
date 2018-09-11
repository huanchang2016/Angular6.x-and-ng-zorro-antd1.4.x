import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { BusinessAdminRoutingModule } from './business-admin-routing.module';
import { IndexComponent as BusinessAdminComponent } from './index/index.component';

@NgModule({
  imports: [
    SharedModule,
    BusinessAdminRoutingModule,
  ],
  declarations: [
    BusinessAdminComponent,
  ]
})
export class BusinessAdminModule { }
