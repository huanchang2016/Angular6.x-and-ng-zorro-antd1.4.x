import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.scss']
})
export class FormInputTextComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

}
