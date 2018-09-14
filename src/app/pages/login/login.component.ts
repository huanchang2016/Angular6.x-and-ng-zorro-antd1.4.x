import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from '../../core/http-request/http-request.service';
import { ApiData } from '../../../data/interface.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  public captchaSrc:string = '';
  constructor(
    private fb: FormBuilder,
    private httpRequest: HttpRequestService,
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [ null, [ Validators.required, Validators.minLength(3) ] ],
      password: [ null, [ Validators.required, Validators.minLength(6) ] ],
      captcha : [ null, [ Validators.required, Validators.minLength(4) ] ],
      remember: [ false ]
    });
    // 初始化获取验证码
    this.getCaptcha();
  }
  
  submitForm(): void {
    for (const i in this.validateForm.controls) {      
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    if(this.validateForm.status === 'VALID' ) {
      let formValue = this.validateForm.value;
      let option = {
        username: formValue.username,
        password: formValue.password,
        captcha: formValue.captcha
      }
      
      this.httpRequest.post('/api/login/username', option).subscribe((res:ApiData) => {
        if(res.code === 1){
          this.httpRequest.showMessage('success', '登录成功');
          let type = res.data.type;
          // type: 1=> 企业用户;  0=> 个人用户
          if(type === 1){
            this.httpRequest.navTo('companyAdmin');
          }else {
            this.httpRequest.navTo('userAdmin');
          }
        }else {
          this.httpRequest.showMessage('error', this.httpRequest.dealFailResponseData(res.data));
        }
      })
    }
  }

  getCaptcha() {
    this.httpRequest.sendImageCaptcha().subscribe((res:ApiData) => {
      if(res.code === 1){
        this.captchaSrc = res.data;
      }else {
        this.httpRequest.showMessage('error', res.msg);
      }
    })
  }
}
