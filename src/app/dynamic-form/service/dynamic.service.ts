import { Injectable } from '@angular/core';
import { HttpRequestService } from '../../core/http-request/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {

  constructor(
    private httpRequest: HttpRequestService
  ) { }

  showMessage (status, msg ) {
    this.httpRequest.showMessage(status, msg);
  }

  fileUploadTest (opt) {
    return this.httpRequest.post('http://tfjyw.cdtfhr.com/api/fileuploadtest', opt);
  }
  
  dealDatePickerMonth (d):string {
     return this.httpRequest.dealDateMonthTime(d);
  }
  dealDatePickerDay (d):string {
     return this.httpRequest.dealDateDayTime(d);
  }
  dealDatePickerTime (d):string {
     return this.httpRequest.dealDateTime(d);
  }
}