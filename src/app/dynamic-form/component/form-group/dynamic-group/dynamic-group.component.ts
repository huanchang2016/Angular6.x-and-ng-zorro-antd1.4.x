import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-dynamic-group',
  templateUrl: './dynamic-group.component.html',
  styleUrls: ['./dynamic-group.component.scss']
})
export class DynamicGroupComponent implements OnInit {
  createFormGroup: FormGroup;
  public _config:any[] = [];

  @Input()
  config:Array<any>;

  @Output()
  submittedGroup: EventEmitter<any> = new EventEmitter<any>();


  constructor(
    private fb: FormBuilder,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.createFormGroup = this.createGroup();
  }

  addGroupForm() {
    console.log('新增表单！');
  }

  createGroup() {
    const group = this.fb.group({});
    (this.config['config'].option).forEach(control => {
      group.addControl(control.field_name, this.fb.control(control.config.default_value, [Validators.required] ));
    });
    return group;
  }
  
  cancel(): void {
    this.nzMessageService.info('取消删除任务!');
  }

  delCurrentForm(): void {
    console.log('确认删除当前表单元素!');
  }

}
