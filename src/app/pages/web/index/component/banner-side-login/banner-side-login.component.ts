import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner-side-login',
  templateUrl: './banner-side-login.component.html',
  styleUrls: ['./banner-side-login.component.scss']
})
export class BannerSideLoginComponent implements OnInit {
  validateForm: FormGroup;
  captcha:string = '';

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      captcha : [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  getCaptcha() {
    console.log('请求获取验证码图片');
  }

}
