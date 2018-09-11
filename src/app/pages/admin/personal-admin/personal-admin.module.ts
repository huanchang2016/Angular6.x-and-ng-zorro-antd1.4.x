import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { PersonalAdminRoutingModule } from './personal-admin-routing.module';
import { IndexComponent as PersonAdminIndexComponent } from '../personal-admin/index/index.component';

@NgModule({
  imports: [
    SharedModule,
    PersonalAdminRoutingModule,
  ],
  declarations: [
    PersonAdminIndexComponent,
  ]
})
export class PersonalAdminModule { }
