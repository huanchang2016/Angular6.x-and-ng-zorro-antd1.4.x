import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { HomeComponent } from './component/home/home.component';
import { IndexRoutingModule } from './index-routing.module';
import { HomeListComponent } from './component/home-list/home-list.component';

@NgModule({
  imports: [
    SharedModule,
    IndexRoutingModule
  ],
  declarations: [HomeComponent, HomeListComponent]
})
export class IndexModule { }
