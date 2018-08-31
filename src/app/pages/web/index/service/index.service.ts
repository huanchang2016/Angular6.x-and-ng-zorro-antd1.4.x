import { Injectable } from '@angular/core';
import { HttpRequestService } from '../../../../core/http-request/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(
    private httpRequest: HttpRequestService
  ) { }

  showMessage (type, msg) {
    this.httpRequest.showMessage(type, msg);
  }
}