import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountManageComponent } from './account-manage.component';

const routes: Routes = [
  { path: '', component: AccountManageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountManageRoutingModule { }
