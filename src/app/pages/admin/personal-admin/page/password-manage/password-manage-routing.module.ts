import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordManageComponent } from './password-manage.component';

const routes: Routes = [
  { path: '', component: PasswordManageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordManageRoutingModule { }
