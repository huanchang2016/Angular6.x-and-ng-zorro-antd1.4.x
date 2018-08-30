import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';


const routes: Routes = [
  // { path: '', redirectTo: 'index', pathMatch: 'full'},
  {
    path: '', component: WebComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './index/index.module#IndexModule' },
      { path: 'zhaopin', loadChildren: './zhaopin/zhaopin.module#ZhaopinModule' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
