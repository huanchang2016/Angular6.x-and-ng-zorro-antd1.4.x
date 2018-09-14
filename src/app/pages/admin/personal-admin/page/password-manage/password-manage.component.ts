import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-manage',
  templateUrl: './password-manage.component.html',
  styleUrls: ['./password-manage.component.scss']
})
export class PasswordManageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPasswordModifyValue($event) {
    console.log($event);
    
  }

}
