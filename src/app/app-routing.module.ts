import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  { path: 'web', loadChildren: './pages/web/web.module#WebModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
  { path: 'userAdmin', loadChildren: './pages/admin/personal-admin/personal-admin.module#PersonalAdminModule'},
  { path: 'companyAdmin', loadChildren: './pages/admin/business-admin/business-admin.module#BusinessAdminModule'},
  { path: '**', redirectTo: 'web', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
