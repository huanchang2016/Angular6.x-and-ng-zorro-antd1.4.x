import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  inputValue: string = '';
  type:string = '职位';

  constructor() { }

  ngOnInit() {
  }

  topSearchAnything (){
    console.log(this.type, this.inputValue);
  }
}
