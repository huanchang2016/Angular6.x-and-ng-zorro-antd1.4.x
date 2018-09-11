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
  captchaSrc:string = '';
  constructor(
    private fb: FormBuilder,
    private httpRequest: HttpRequestService,
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required, Validators.minLength(3) ] ],
      password: [ null, [ Validators.required, Validators.minLength(6) ] ],
      captcha : [ null, [ Validators.required, Validators.minLength(4) ] ],
      remember: [ false ]
    });
    // 初始化获取验证码
    this.getCaptcha();

  }
  
  submitForm(): void {
    // console.log(this.validateForm);
    for (const i in this.validateForm.controls) {      
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    if(this.validateForm.status === 'VALID' ) {
      console.log(this.validateForm.value);
      this.httpRequest.showMessage('success', '验证通过！');
      this.httpRequest.navTo('userAdmin');
    }
  }

  getCaptcha() {
    console.log('请求获取验证码图片');

    this.httpRequest.get('http://localhost/api/get_captcha').subscribe((res:ApiData) => {
      if(res.code === 1){
        // this.captchaSrc = res.data.path
      }
      
    })
  }


}
