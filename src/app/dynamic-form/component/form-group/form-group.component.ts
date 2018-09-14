import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  template: `
    <app-creat-form [CONFIG]="config"></app-creat-form>
  `
})
export class FormGroupComponent implements OnInit {
  config;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

}
