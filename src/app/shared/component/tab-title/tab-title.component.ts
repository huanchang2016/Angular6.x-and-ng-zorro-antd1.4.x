import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-title',
  template: `
    <div class="title">
      <h2 class="text-center bg-primary light">{{title}}</h2>
      <div class="title-border-bottom bg-primary"></div>
    </div>
  `,
  styles: [`
  .title  h2 {
      width: 100px;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      overflow: hidden;
  }
  .title-border-bottom {
      height: 2px;
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
