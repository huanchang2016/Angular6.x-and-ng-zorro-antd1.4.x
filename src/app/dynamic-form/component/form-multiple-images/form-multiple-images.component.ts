import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-multiple-images',
  templateUrl: './form-multiple-images.component.html',
  styleUrls: ['./form-multiple-images.component.scss']
})
export class FormMultipleImagesComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
