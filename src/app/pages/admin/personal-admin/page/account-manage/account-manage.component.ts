import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { BindEmailComponent } from './bind-email/bind-email.component';

@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.component.html',
  styleUrls: ['./account-manage.component.scss']
})
export class AccountManageComponent implements OnInit {

  constructor(
    private modalService: NzModalService,
  ) { }

  ngOnInit() {
  }

  creatBindEmailModal(): void {
    const modal = this.modalService.create({
      nzTitle: '绑定邮箱',
      nzContent: BindEmailComponent,
      nzComponentParams: { // 向子组件传递参数

      },
      nzFooter: null,
    });

    // modal 打开后立即执行的事件
    // modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
  }
}
