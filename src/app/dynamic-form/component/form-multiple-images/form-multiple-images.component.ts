import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicService } from '../../service/dynamic.service';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-form-multiple-images',
  templateUrl: './form-multiple-images.component.html',
  styleUrls: ['./form-multiple-images.component.scss']
})
export class FormMultipleImagesComponent implements OnInit {
  config;
  group: FormGroup;

  fileList: UploadFile[] = [];
  constructor(
    private dynamicService: DynamicService,
  ) { }



  ngOnInit() {
  }

  beforeUpload = (file: UploadFile) => {
    let isJPG = file.type.indexOf('image/') != -1;
    if (!isJPG) {
      this.dynamicService.showMessage('error', '只能上传图片格式的文件!');
      return false;
    }
    let isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.dynamicService.showMessage('error', '上传图片不能超过2M!');
      return false;
    }
    this.fileList.push(file);
    this.group.value[this.config.field_name] = this.fileList;
    return false;
  }
}
