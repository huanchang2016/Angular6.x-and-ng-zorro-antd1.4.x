import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-multiple-file',
  templateUrl: './form-multiple-file.component.html',
  styleUrls: ['./form-multiple-file.component.scss']
})
export class FormMultipleFileComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
