import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { HomeComponent } from './component/home/home.component';
import { IndexRoutingModule } from './index-routing.module';
// import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    SharedModule,
    // NgZorroAntdModule,
    IndexRoutingModule
  ],
  declarations: [HomeComponent]
})
export class IndexModule { }
