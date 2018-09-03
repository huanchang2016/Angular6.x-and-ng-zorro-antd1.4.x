import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {

  advertArray1 = [
    { url: '/web/zhaopin', path: '/assets/lib/imgs/test/banner1.jpg' },
    { url: '/web/zhaopin', path: '/assets/lib/imgs/test/banner2.jpg' },
    { url: '/web/zhaopin', path: '/assets/lib/imgs/test/banner3.jpg' },
    { url: '/web/zhaopin', path: '/assets/lib/imgs/test/banner4.jpg' },
  ];

  advertArray2 = [
    { url: '/web/zhaopin', path: '/assets/lib/imgs/test/banner2.jpg' },
    { url: '/web/zhaopin', path: '/assets/lib/imgs/test/banner5.jpg' },
    { url: '/web/zhaopin', path: '/assets/lib/imgs/test/banner3.jpg' },
    { url: '/web/zhaopin', path: '/assets/lib/imgs/test/banner1.jpg' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
