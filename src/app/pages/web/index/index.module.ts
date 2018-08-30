import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { HomeComponent } from './component/home/home.component';
import { IndexRoutingModule } from './index-routing.module';
import { HomeListComponent } from './component/home-list/home-list.component';
import { BannerSideNewsComponent } from './component/banner-side-news/banner-side-news.component';
import { BannerSideLoginComponent } from './component/banner-side-login/banner-side-login.component';
import { BannerComponent } from './component/banner/banner.component';

@NgModule({
  imports: [
    SharedModule,
    IndexRoutingModule
  ],
  declarations: [HomeComponent, HomeListComponent, BannerSideNewsComponent, BannerSideLoginComponent, BannerComponent]
})
export class IndexModule { }
