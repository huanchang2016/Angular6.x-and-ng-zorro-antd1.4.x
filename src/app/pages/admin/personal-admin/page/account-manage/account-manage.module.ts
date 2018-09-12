import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';

import { AccountManageRoutingModule } from './account-manage-routing.module';
import { AccountManageComponent } from './account-manage.component';

@NgModule({
  imports: [
    SharedModule,
    AccountManageRoutingModule
  ],
  declarations: [AccountManageComponent]
})
export class AccountManageModule { }