import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumesComponent } from './resumes/resumes.component';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { EditResumeComponent } from './edit-resume/edit-resume.component';

const routes: Routes = [
  { path: '', component: ResumesComponent },
  { path: 'add', component: AddResumeComponent },
  { path: 'edit', component: EditResumeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyResumesRoutingModule { }
