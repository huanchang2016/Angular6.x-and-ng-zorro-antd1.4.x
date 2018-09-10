import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss']
})
export class FormEditorComponent implements OnInit {
  config;
  group: FormGroup;

  content: string;
  constructor() { }

  ngOnInit() {
    this.content = this.config.vlaue || this.config.placeholder;
  }

  getMyEditorContent($event) {
    this.group.value[this.config.name] = $event;
  }
}
