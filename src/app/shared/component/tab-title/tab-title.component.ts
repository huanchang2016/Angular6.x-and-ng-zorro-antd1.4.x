import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-title',
  template: `
    <div class="tab-title">
      <div class="title"><h2 class="text-center bg-primary light fl">{{title}}</h2></div>
      <div class="title-border-bottom bg-primary"></div>
    </div>
  `,
  styles: [`
  .tab-title {
    height: 42px;
  }
  .title {
    height: 40px;
  }
  .title  h2 {
      padding: 0 20px;
      line-height: 40px;
      font-size: 18px;
      overflow: hidden;
  }
  .title-border-bottom {
      height: 2px;
      width: 100%;
  }
  `]
})
export class TabTitleComponent implements OnInit {

  public title: string = '';
  @Input()
  set Title(val) {
    if (val) {
      this.title = val;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
