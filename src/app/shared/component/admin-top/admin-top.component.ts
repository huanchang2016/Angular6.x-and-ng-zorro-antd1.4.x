import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-top',
  templateUrl: './admin-top.component.html',
  styleUrls: ['./admin-top.component.scss']
})
export class AdminTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginOut() {
    console.log('login out');
  }

}
