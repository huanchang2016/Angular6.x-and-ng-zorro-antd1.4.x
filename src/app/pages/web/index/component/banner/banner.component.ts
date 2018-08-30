import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  bannerArray = [
    {id: 1, path: '/assets/lib/imgs/test/banner1.jpg', link: '/', description: '图片内容描述'},
    {id: 1, path: '/assets/lib/imgs/test/banner2.jpg', link: '/', description: '图片内容描述'},
    {id: 1, path: '/assets/lib/imgs/test/banner3.jpg', link: '/', description: '图片内容描述'},
    {id: 1, path: '/assets/lib/imgs/test/banner4.jpg', link: '/', description: '图片内容描述'},
    {id: 1, path: '/assets/lib/imgs/test/banner5.jpg', link: '/', description: '图片内容描述'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
