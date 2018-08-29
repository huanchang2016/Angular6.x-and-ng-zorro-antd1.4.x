import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  group = 'default';
  size = 'large';

  isLoadingOne = false;
  isLoadingTwo = false;

  constructor() { }

  ngOnInit() {
  }
  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(_ => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(_ => {
      this.isLoadingTwo = false;
    }, 5000);
  }
}
