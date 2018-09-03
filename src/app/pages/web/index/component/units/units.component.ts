import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  unitsArray:Array<any> = [
    [ {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner1.jpg'} ],
    [ {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner2.jpg'} ],
    [ {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner3.jpg'} ],
    [ {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'}, {url: '/web/zhaopin', path:'/assets/lib/imgs/test/banner4.jpg'} ]
  ];

  constructor() { }

  ngOnInit() {
  }
}
