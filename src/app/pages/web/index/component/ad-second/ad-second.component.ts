import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-second',
  templateUrl: './ad-second.component.html',
  styleUrls: ['./ad-second.component.scss']
})
export class AdSecondComponent implements OnInit {

  @Input()
  AdSecondList:Array<any>;
  
  constructor() { }

  ngOnInit() {
  }

}
