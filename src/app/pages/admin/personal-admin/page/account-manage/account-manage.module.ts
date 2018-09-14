import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';

import { AccountManageRoutingModule } from './account-manage-routing.module';
import { AccountManageComponent } from './account-manage.component';
import { BindEmailComponent } from './bind-email/bind-email.component';

@NgModule({
  imports: [
    SharedModule,
    AccountManageRoutingModule
  ],
  declarations: [AccountManageComponent, BindEmailComponent],
  entryComponents: [
    BindEmailComponent,
  ]
})
export class AccountManageModule { }
