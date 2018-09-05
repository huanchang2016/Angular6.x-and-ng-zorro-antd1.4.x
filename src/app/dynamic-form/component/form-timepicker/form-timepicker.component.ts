import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-timepicker',
  templateUrl: './form-timepicker.component.html',
  styleUrls: ['./form-timepicker.component.scss']
})
export class FormTimepickerComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
