import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-file',
  templateUrl: './form-file.component.html',
  styleUrls: ['./form-file.component.scss']
})
export class FormFileComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
