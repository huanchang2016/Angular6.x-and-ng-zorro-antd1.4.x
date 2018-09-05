import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { DynamicFormModule } from '../../dynamic-form/dynamic-form.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    SharedModule,
    DynamicFormModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
