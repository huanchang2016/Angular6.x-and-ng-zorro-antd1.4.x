import { Component, OnInit } from '@angular/core';

const sideMenu = [
  {
    title: '账户管理',
    titleIcon: 'icon iconfont icon-userset',
    subMenu: [
      { subTitle: '个人首页', path: './home' },
      { subTitle: '基本资料', path: './info' },
      { subTitle: '密码管理', path: './password' },
      { subTitle: '账号绑定', path: './account' }
    ]
  },
  {
    title: '简历管理',
    titleIcon: 'anticon anticon-profile',
    subMenu: [
      { subTitle: '我的简历', path: './resumes' },
      { subTitle: '隐私设置', path: './privacySettings' }
    ]
  },
  {
    title: '求职管理',
    titleIcon: 'anticon anticon-table',
    subMenu: [
      { subTitle: '被邀请面试记录', path: './interviewRecords' },
      { subTitle: '简历浏览记录', path: './resumeRecords'}
    ]
  }
];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public adminSideMenu:Array<any> = sideMenu;
  
  constructor() { }

  ngOnInit() {
  }

  updateAccountSafeGrade() {
    console.log('提升账号安全等级!');
  }

}
