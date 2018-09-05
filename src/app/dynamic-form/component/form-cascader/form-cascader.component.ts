import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-cascader',
  templateUrl: './form-cascader.component.html',
  styleUrls: ['./form-cascader.component.scss']
})
export class FormCascaderComponent implements OnInit {
  config;
  group: FormGroup;
  public values: any[] = null;
  constructor() { }

  ngOnInit() {
    console.log(this.group);
  }
  public onChanges(values: any): void {
    console.log(values, this.values);
  }
}
