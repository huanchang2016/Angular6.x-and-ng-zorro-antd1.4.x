import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent as BusinessAdminComponent } from './index/index.component';
import { AdminLoginGuardGuard } from './guard/admin-login-guard.guard';

const routes: Routes = [
  { path: '', component: BusinessAdminComponent,
    canActivate: [ AdminLoginGuardGuard ],
    // children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessAdminRoutingModule { }
