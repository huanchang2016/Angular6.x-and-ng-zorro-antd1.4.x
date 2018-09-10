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
  
  public isError:boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(this.group);
  }

  onChanges($event: any): void {
    if(this.group.get(this.config.name).dirty && this.group.get(this.config.name).errors) {
      this.isError = true;
    }else {
      this.isError = false;
    }
  }

}
