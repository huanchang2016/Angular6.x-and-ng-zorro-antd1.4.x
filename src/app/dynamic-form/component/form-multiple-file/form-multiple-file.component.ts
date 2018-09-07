import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-form-multiple-file',
  templateUrl: './form-multiple-file.component.html',
  styleUrls: ['./form-multiple-file.component.scss']
})
export class FormMultipleFileComponent implements OnInit {
  config;
  group: FormGroup;

  fileList: UploadFile[] = [];

  constructor() {}


  ngOnInit() {
  }

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList.push(file);
    this.group.value[this.config.name] = this.fileList;
    return false;
  }
}
