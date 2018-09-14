import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { DynamicFormModule } from '../../../../../dynamic-form/dynamic-form.module';

import { MyResumesRoutingModule } from './my-resumes-routing.module';
import { ResumesComponent } from './resumes/resumes.component';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { EditResumeComponent } from './edit-resume/edit-resume.component';

@NgModule({
  imports: [
    SharedModule,
    DynamicFormModule,
    MyResumesRoutingModule
  ],
  declarations: [ResumesComponent, AddResumeComponent, EditResumeComponent]
})
export class MyResumesModule { }
