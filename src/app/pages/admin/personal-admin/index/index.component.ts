import { Component, OnInit } from '@angular/core';

const sideMenu = [
  {
    title: '账户管理',
    titleIcon: 'anticon anticon-user',
    subMenu: [
      { subTitle: '个人首页', path: './home' },
      { subTitle: '基本资料', path: './info' },
      { subTitle: '密码管理', path: './password' },
      { subTitle: '账号绑定', path: './account' }
    ]
  },
  {
    title: '简历管理',
    titleIcon: 'anticon anticon-user',
    subMenu: [
      { subTitle: '查看简历', path: './home' },
      { subTitle: '创建简历', path: './info' },
      { subTitle: '修改简历', path: './password' },
      { subTitle: '隐私设置', path: './account' }
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
