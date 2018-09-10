import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../../core/http-request/http-request.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {
  accountType: string = 'user';
  constructor(
    private httpRequest: HttpRequestService,
  ) { }

  ngOnInit() {
  }

  selectRegisterType (type:string ) {
    if(type === 'company'){
      this.httpRequest.navTo('/register/userAccount');
    }
  }


}
