import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { HomeComponent } from './component/home/home.component';
import { IndexRoutingModule } from './index-routing.module';
import { HomeListComponent } from './component/home-list/home-list.component';
import { BannerSideNewsComponent } from './component/banner-side-news/banner-side-news.component';
import { BannerSideLoginComponent } from './component/banner-side-login/banner-side-login.component';
import { BannerComponent } from './component/banner/banner.component';
import { AdSecondComponent } from './component/ad-second/ad-second.component';
import { IndexService } from './service/index.service';
import { ExpatriationNewsComponent } from './component/expatriation-news/expatriation-news.component';
import { NotificNewsComponent } from './component/notific-news/notific-news.component';
import { RecruitComponent } from './component/recruit/recruit.component';
import { UnitsComponent } from './component/units/units.component';
import { AdvertComponent } from './component/advert/advert.component';
import { AdvertisingComponent } from './component/advertising/advertising.component';
import { FriendLinkComponent } from './component/friend-link/friend-link.component';

@NgModule({
  imports: [
    SharedModule,
    IndexRoutingModule
  ],
  declarations: [HomeComponent, HomeListComponent, BannerSideNewsComponent, BannerSideLoginComponent, BannerComponent, AdSecondComponent, ExpatriationNewsComponent, NotificNewsComponent, RecruitComponent, UnitsComponent, AdvertComponent, AdvertisingComponent, FriendLinkComponent],
  providers: [
    IndexService
  ]
})
export class IndexModule { }
