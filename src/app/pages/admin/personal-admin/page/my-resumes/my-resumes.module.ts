import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyResumesRoutingModule } from './my-resumes-routing.module';
import { ResumesComponent } from './resumes/resumes.component';

@NgModule({
  imports: [
    CommonModule,
    MyResumesRoutingModule
  ],
  declarations: [ResumesComponent]
})
export class MyResumesModule { }
