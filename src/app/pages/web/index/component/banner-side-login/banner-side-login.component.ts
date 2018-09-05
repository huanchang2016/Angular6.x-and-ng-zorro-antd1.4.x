import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IndexService } from '../../service/index.service';
import { HttpRequestService } from '../../../../../core/http-request/http-request.service';

@ViewChild('input')

@Component({
  selector: 'app-banner-side-login',
  templateUrl: './banner-side-login.component.html',
  styleUrls: ['./banner-side-login.component.scss']
})
export class BannerSideLoginComponent implements OnInit {
  validateForm: FormGroup;
  captcha:string = '';
  // 显示提示信息 及提示信息内容
  isError:boolean = false;
  toastMsg: string = '';
  formKey = {
    userName: '用户名',
    password: '密码',
    captcha: '验证码',
    remember: '记住密码'
  };

  constructor(
    private fb: FormBuilder,
    // private indexService: IndexService,
    private httpRequest: HttpRequestService
  ) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required, Validators.minLength(3) ] ],
      password: [ null, [ Validators.required, Validators.minLength(6) ] ],
      captcha : [ null, [ Validators.required, Validators.minLength(4) ] ],
      remember: [ true ]
    });

    this.validateForm.addControl('test', this.fb.control(''));
    console.log(this.validateForm.value);
    this.validateForm.valueChanges.subscribe( () => {
      this.isError = !this.checkFormValue();
    })
  }
  
  submitForm(): void {
    // console.log(this.validateForm);
    for (const i in this.validateForm.controls) {      
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
      
      // 判断当前表单元素是否通过验证，如果没有，则最先检测出来的input获得焦点
      if(this.validateForm.controls[i].status === "INVALID") {
        document.getElementById(i).focus();
        return;
      }
    }

    // 检测信息填写是否完整
    this.isError = !this.checkFormValue();

    if(this.validateForm.status === 'VALID' ) {
      console.log(this.validateForm.value);
      this.httpRequest.showMessage('success', '验证通过！');
    }
    
  }

  getCaptcha() {
    console.log('请求获取验证码图片');
  }

  checkFormValue():boolean{
    
    for (const i in this.validateForm.controls) {
      if (this.validateForm.get(i).dirty && this.validateForm.get(i).errors) {
        this.isError = true;
        this.toastMsg = `您的${ this.formKey[i] }未正确填写！`;
        return false;
      }
    }
    return true;
  }

}
