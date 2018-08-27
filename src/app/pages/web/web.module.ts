import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';

import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
// import { NgZorroAntdModule } from 'ng-zorro-antd';

const CORECOMPONENT = [
  WebComponent,
  HeaderComponent,
  NavbarComponent,
  FooterComponent,
  LoginComponent
];
@NgModule({
  imports: [
    SharedModule,
    WebRoutingModule,
    // NgZorroAntdModule,
  ],
  declarations: [
    ...CORECOMPONENT
  ]
})
export class WebModule { }
