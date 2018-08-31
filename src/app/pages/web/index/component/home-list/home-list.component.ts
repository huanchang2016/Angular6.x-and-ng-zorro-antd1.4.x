import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../../../../../data/interface.class';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
  title: string = 'card title';
  @Input()
  cardTitle:string;
  @Input()
  cardList:Array<List>;


  tabs = [ 1, 2, 3 ];
  constructor() { }

  ngOnInit() {
  }

}
