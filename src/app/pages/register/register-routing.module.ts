import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { BusinessAccountComponent } from './business-account/business-account.component';

const routes: Routes = [
  { path: '', component: RegisterComponent,
    children: [
      { path: '', redirectTo: 'userAccount', pathMatch: 'full' },
      { path: 'userAccount', component: UserAccountComponent },
      { path: 'companyAccount', component: BusinessAccountComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
