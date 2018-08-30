import { Component, OnInit } from '@angular/core';
import { List } from '../../../../../../data/interface.class';

@Component({
  selector: 'app-banner-side-news',
  templateUrl: './banner-side-news.component.html',
  styleUrls: ['./banner-side-news.component.scss']
})
export class BannerSideNewsComponent implements OnInit {
  public title: string = 'newsTitle';
  public News:Array<List> = [
    { id: 1, title: '四川省人民政府关于贯彻实施国务院关于修改《工伤保险条例》决定的通知'},
    { id: 2, title: '恒信优秀教师——光华实验小学 李静'},
    { id: 3, title: '优秀恒信教师——光华实验小学 张红梅'},
    { id: 4, title: '恒信优秀教师——公平学校 胡琴'},
    { id: 5, title: '2016年度考核评选进行中'},
    { id: 6, title: '关于2016年度考核结果的通知'},
    { id: 7, title: '成都恒信人力资源管理有限责任公司关于纪念建党96周年系列活动——优秀共产党员评选表彰（名单'},
    { id: 5, title: '国土局编外员工加入恒信大家庭'},
    { id: 6, title: '区公安分局辅警、天网监控人员招募工作正式启动'},
    { id: 5, title: '青年人才落户温江攻略'},
    { id: 6, title: '关于转发《四川省人力资源和社会保障厅四川省财政厅关于调整失业保险费率有关问题的通知》的通知'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
