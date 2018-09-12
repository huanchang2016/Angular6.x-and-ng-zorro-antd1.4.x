import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent as PersonAdminIndexComponent } from '../personal-admin/index/index.component';
import { AdminLoginGuardGuard } from './guard/admin-login-guard.guard';

const routes: Routes = [
  {
    path: '', component: PersonAdminIndexComponent,
    canActivate: [AdminLoginGuardGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './page/home/home.module#HomeModule' },
      { path: 'info', loadChildren: './page/basic-info/basic-info.module#BasicInfoModule' },
      { path: 'password', loadChildren: './page/password-manage/password-manage.module#PasswordManageModule' },
      { path: 'account', loadChildren: './page/account-manage/account-manage.module#AccountManageModule' },
      { path: 'resumes', loadChildren: './page/my-resumes/my-resumes.module#MyResumesModule' },
      { path: 'privacySettings', loadChildren: './page/privacy-settings/privacy-settings.module#PrivacySettingsModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalAdminRoutingModule { }
