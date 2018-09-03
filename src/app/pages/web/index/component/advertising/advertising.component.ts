import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../service/index.service';
import { ApiData } from '../../../../../../data/interface.class';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent implements OnInit {

  advertArray = [
    { url: '/web/zhaopin', path: '/assets/lib/imgs/test/banner1.jpg' },
    { url: '/web/zhaopin', path: '/assets/lib/imgs/test/banner2.jpg' },
  ];

  constructor(
    private indexService : IndexService
  ) { }

  ngOnInit() {
    
  }

}
