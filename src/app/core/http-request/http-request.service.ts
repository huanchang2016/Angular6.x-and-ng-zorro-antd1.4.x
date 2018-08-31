import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { StorageValue } from '../../../data/interface.class';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(
    private http: HttpClient,
    private route: Router,
    private titleService: Title,
    private message: NzMessageService,
  ) { }


  get(url, opt = {}){
    return this.http.get(url, opt);
  }

  post(url:string, option = {}){
    return this.http.post(url, option).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  // show message
  showMessage (type:string = 'success', message:string) {
    this.message.create(type, message);
  }
  // router navigation
  navTo(url){
    this.route.navigateByUrl(url);
  }
  
  // set Title
  setTitle = (name) => {
    this.titleService.setTitle(name);
  }

  setLocalStorageItem(name, value) {
    window.localStorage.setItem(name, JSON.stringify(value));
  }

  getLocalStorageItem(name) {
    let option: StorageValue = JSON.parse(window.localStorage.getItem(name));
    if (option && option.t) {
      return option.t > (new Date).getTime() ? option.data : false;
    }
    return false;
  }

  removeItem(name) {
    window.localStorage.removeItem(name);
  }

  // 本地存储设置时间 key: name, value: value, time: t(设置为小时。 默认为2小时)
  setLocalStorageItemAnyTime(name, value, t = 2) {
    // add a key for timecheck
    let d = new Date();
    let date = d.getTime() + t * 1000 * 60 * 60;
    let opt = {
      t: date,
      data: value
    }
    window.localStorage.setItem(name, JSON.stringify(opt));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('发生了一个错误:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `请求错误 ${error.status}, ` +
        `错误原因: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return Observable.throw({code: 0, data: null, msg: '请求失败，请稍后重试.'});
  };
}
