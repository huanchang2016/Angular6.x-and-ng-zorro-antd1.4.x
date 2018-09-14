import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creat-form',
  templateUrl: './creat-form.component.html',
  styleUrls: ['./creat-form.component.scss']
})
export class CreatFormComponent implements OnInit {
  public config:Array<any> = [];
  @Input()
  CONFIG:Array<any>;
  
  constructor() { }

  ngOnInit() {
    console.log(this.CONFIG);
  }
  
  formSubmitted(value) {
    console.log(value);
    
  }
}
