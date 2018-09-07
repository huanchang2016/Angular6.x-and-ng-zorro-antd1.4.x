import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-form-file',
  templateUrl: './form-file.component.html',
  styleUrls: ['./form-file.component.scss']
})
export class FormFileComponent implements OnInit {
  config;
  group: FormGroup;
  _file: UploadFile[] = [];
  constructor() {}


  ngOnInit() {
  }

  beforeUpload = (file: UploadFile): boolean => {
    console.log(file);
    let uploadFile = file;
    this._file[0] = uploadFile;
    this.group.value[this.config.name] = uploadFile;
    return false;
  }
}
