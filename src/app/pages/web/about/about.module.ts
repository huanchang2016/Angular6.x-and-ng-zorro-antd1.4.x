import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { AboutRoutingModule } from './about-routing.module';
import { HomeComponent } from './component/home/home.component';
import { IdeaComponent } from './component/idea/idea.component';

@NgModule({
  imports: [
    SharedModule,
    AboutRoutingModule
  ],
  declarations: [
    HomeComponent,
    IdeaComponent,
  ]
})
export class AboutModule { }
