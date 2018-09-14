import { Injectable } from '@angular/core';
import { HttpRequestService } from '../../../../core/http-request/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(
    private httpRequest: HttpRequestService
  ) { }

  // login
  loginIn(opt){
    return this.httpRequest.post('/api/login/username', opt);
  }
  // nav to url 
  navTo (url){
    this.httpRequest.navTo(url);
  }

  // 错误提示
  errorMsgDeal(opt){
    return this.httpRequest.dealFailResponseData(opt);
  }

  sendCaptcha(){
    return this.httpRequest.sendImageCaptcha();
  }

  showMessage (type, msg) {
    this.httpRequest.showMessage(type, msg);
  }
}