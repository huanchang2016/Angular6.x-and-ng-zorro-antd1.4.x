import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent as ZpHomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: ZpHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZhaopinRoutingModule { }
