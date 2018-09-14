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
    this.content = this.config.config.default_value || this.config.tips;
  }

  getMyEditorContent($event) {
    this.group.value[this.config.field_name] = $event;
  }
}
