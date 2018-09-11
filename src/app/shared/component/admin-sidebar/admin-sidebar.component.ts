import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  public sideMenu:Array<any>;

  @Input()
  set adminSideMenu(val){
    if(val) {
      this.sideMenu = val;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
