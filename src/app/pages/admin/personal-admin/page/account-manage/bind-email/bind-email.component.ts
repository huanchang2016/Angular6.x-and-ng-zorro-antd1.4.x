import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonAdminService } from '../../../service/person-admin.service';
import { ApiData } from '../../../../../../../data/interface.class';

@Component({
  selector: 'app-bind-email',
  templateUrl: './bind-email.component.html',
  styleUrls: ['./bind-email.component.scss']
})
export class BindEmailComponent implements OnInit {

  validateForm: FormGroup;
  public captchaSrc:string = '';

  constructor(
    private modal: NzModalRef,
    private fb: FormBuilder,
    private personAdminService: PersonAdminService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [ null, [ Validators.required, Validators.email ] ],
      emailCaptcha: [ null, [ Validators.required ] ],
      captcha: [ null, [ Validators.required ] ]
    });
    this.getCaptcha();
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(this.validateForm.status === 'VALID'){
      let formValue = this.validateForm.value;
      let option = {
        email : formValue.email,
        vcode: formValue.emailCaptcha,
        captcha: formValue.captcha
      };
      this.personAdminService.bindEmailForAccount(option).subscribe((res:ApiData) => {
        console.log(res);
        if(res.code === 1){
          this.personAdminService.showMessage('success', '绑定成功');
          this.destroyModal({data: 'success'});
        }else {
          this.personAdminService.showMessage('error', '绑定失败');
        }
      })
    }
  }

  getEmailCaptcha(e: MouseEvent): void {
    e.preventDefault();
    if(this.validateForm.controls['email'].status === 'VALID') {
        this.personAdminService.sendEmailCaptcha({email: this.validateForm.value.email}).subscribe((res:ApiData) => {
          console.log(res);
          if(res.code === 1){
            this.personAdminService.showMessage('success', '发送成功');
          }
        })
    }else {
      this.personAdminService.showMessage('error', '邮箱不能为空');
    }
  }

  getCaptcha() {
    this.personAdminService.getImageCaptcha().subscribe((res:ApiData) => {
      if(res.code === 1){
        this.captchaSrc = res.data;
      }else {
        this.personAdminService.showMessage('error', res.msg);
      }
    })
  }

  // 关闭对话框并传值到父组件
  destroyModal(data?): void {
    this.modal.destroy(data);
  }

}
