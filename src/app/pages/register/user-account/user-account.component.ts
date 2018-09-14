import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpRequestService } from '../../../core/http-request/http-request.service';
import { ApiData } from '../../../../data/interface.class';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  validateForm: FormGroup;
  public currentSteps:number = 0;
  public passwordType:string = 'password';
  public captchaSrc:string = '';

  constructor(
    private fb: FormBuilder,
    private httpRequest: HttpRequestService,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username            : [ null, [ Validators.required ] ],
      password         : [ null, [ Validators.required, Validators.minLength(6) ] ],
      password_confirmed    : [ null, [ Validators.required, this.confirmationValidator ] ],
      captcha          : [ null, [ Validators.required ] ],
      agree: [ false, Validators.required ]
    });
    this.changeCaptchImage();
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(this.validateForm.status === "VALID" && this.validateForm.value.agree === true) {
      let formValue = this.validateForm.value;
      let option = {
        username: formValue.username,
        password: formValue.password,
        password_confirmation: formValue.password_confirmed,
        captcha: formValue.captcha
      }

      this.httpRequest.post('/api/reg/username', option).subscribe((res:ApiData) => {
        if(res.code === 1){
          this.httpRequest.showMessage('success', '注册成功');
          this.httpRequest.navTo('/login');
        }else {
          this.httpRequest.showMessage('error', this.httpRequest.dealFailResponseData(res.data));
        }
      })
    }
  }

  updateConfirmValidator(): void {
    //  验证密码强度，规则为： 
    //      只有单一数字、字母时，强度为弱；
    //      数字、大小写字母、任意两种，强度为中等；
    //      数字，大小写字母都有，则为强
    //   将三种正则验证的结果Boolean 转为 number 0 和 1， 然后相加，判断最终结果即可。
    let currentPassword = this.validateForm.value.password;
    if(currentPassword.length >= 6){
      let isNumber:number = (/[0-9]/.test(currentPassword)) ? 1 : 0;
      let isUpperCase:number = (/[A-Z]/.test(currentPassword)) ? 1 : 0;
      let isLowerCase:number = (/[a-z]/.test(currentPassword)) ? 1 : 0;
      let check = isNumber + isUpperCase + isLowerCase
      if(check === 1 || check === 0){
        this.currentSteps = 0;
      }else if( check === 2){
        this.currentSteps = 1;
      }else {
        this.currentSteps = 2;
      }
    }
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.password_confirmed.updateValueAndValidity());
  }

  // 设置密码是否可见
  changePasswordType () {
    let passwordInput = document.querySelector('#password');
    let _type = passwordInput.getAttribute('type');
    if(_type === 'password'){
      passwordInput.setAttribute('type', 'text');
    }else {
      passwordInput.setAttribute('type', 'password');
    }
    
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  }

  changeCaptchImage() {
    this.validateForm.patchValue({
      captcha: ''
    })
    this.httpRequest.sendImageCaptcha().subscribe((res:ApiData) => {
      if(res.code === 1){
        this.captchaSrc = res.data;
      }else {
        this.httpRequest.showMessage('error', res.msg);
      }
    })
  }
}
