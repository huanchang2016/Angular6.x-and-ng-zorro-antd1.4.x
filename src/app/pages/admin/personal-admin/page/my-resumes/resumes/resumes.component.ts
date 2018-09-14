import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.scss']
})
export class ResumesComponent implements OnInit {

  public isResume:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
