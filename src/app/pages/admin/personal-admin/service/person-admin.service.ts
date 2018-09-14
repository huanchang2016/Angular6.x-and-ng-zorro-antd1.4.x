import { Injectable } from '@angular/core';
import { HttpRequestService } from '../../../../core/http-request/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class PersonAdminService {

  constructor(
    private httpRequestService : HttpRequestService,
  ) {}

  // 获取默认简历配置
  getResumeDefaultConfig () {
    return this.httpRequestService.post('/api/resume/form');
  }

  // 图片验证码
  getImageCaptcha(){
    return this.httpRequestService.sendImageCaptcha();
  }
  // 发送邮箱验证码
  sendEmailCaptcha(opt){
    return this.httpRequestService.post('/api/bind/send/email', opt);
  }
  // 绑定邮箱
  bindEmailForAccount(opt) {
    return this.httpRequestService.post('/api/bind/email', opt);
  }

  showMessage(type, msg) {
    this.httpRequestService.showMessage(type, msg);
  }
}
