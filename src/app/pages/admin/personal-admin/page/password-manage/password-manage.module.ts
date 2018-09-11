import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';

import { PasswordManageRoutingModule } from './password-manage-routing.module';
import { PasswordManageComponent } from './password-manage.component';

@NgModule({
  imports: [
    SharedModule,
    PasswordManageRoutingModule
  ],
  declarations: [PasswordManageComponent]
})
export class PasswordManageModule { }
