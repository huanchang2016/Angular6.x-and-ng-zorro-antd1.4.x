import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'my-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  // name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent:string;
  @ViewChild("myckeditor") ckeditor: any;

  @Input()
  set content(val: string) {
    this.mycontent = val || '请编辑内容';
  }
 
  get content(): string { return this.mycontent; }

  @Output()
  myEditorContent: EventEmitter<string> = new EventEmitter();
  
  constructor() {

  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: true
    };
  }

  onChange($event: any): void {
    console.log($event);
    this.myEditorContent.emit($event);
  }
}
