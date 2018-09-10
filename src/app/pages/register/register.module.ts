import { NgModule } from '@angular/core';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { BusinessAccountComponent } from './business-account/business-account.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent, BusinessAccountComponent, UserAccountComponent]
})
export class RegisterModule { }
