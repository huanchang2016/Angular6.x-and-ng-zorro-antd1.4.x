import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent implements OnInit {
  config;
  group: FormGroup;

  public checkboxOption: Array<any> = [];

  constructor() { }

  ngOnInit() {
    (this.config.config.option).forEach(el => {
      let obj = {
        label: el.name,
        value: el.value,
        checked: el.checked ? el.checked : false
      };
      this.checkboxOption.push(obj);
    });
  }

  checkedChange(value: object[]): void {
    this.group.value[this.config.field_name] = value;
  }
}
