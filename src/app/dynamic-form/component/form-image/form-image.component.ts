import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicService } from '../../service/dynamic.service';

@Component({
  selector: 'app-form-image',
  templateUrl: './form-image.component.html',
  styleUrls: ['./form-image.component.scss']
})
export class FormImageComponent implements OnInit {
  config;
  group: FormGroup;
  loading = false;
  avatarUrl: string;

  constructor(
    private dynamicService: DynamicService,
  ) { }

  ngOnInit() {

  }

  beforeUpload = (file: File) => {
    const isJPG = file.type.indexOf('image/') != -1;
    if (!isJPG) {
      this.dynamicService.showMessage('error', '只能上传图片格式的文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.dynamicService.showMessage('error', '上传图片不能超过2M!');
    }

    this.group.value[this.config.field_name] = file;
    console.log(this.group.value);

    this.getBase64(file, (img: string) => {
      this.loading = false;
      this.avatarUrl = img;
    });
    return false;
  }

  private getBase64(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

}
