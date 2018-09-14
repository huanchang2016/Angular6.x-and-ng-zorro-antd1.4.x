import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  template: `
    <form
      nz-form
      [formGroup]="form"
      (ngSubmit)="submitted.emit(form)">
      <ng-container
        *ngFor="let field of _config;"
        dynamicField
        [config]="field"
        [group]="form">
      </ng-container>
      <nz-form-item nz-row class="text-center" *ngIf="formTitle">
        <nz-form-control>
          <button nz-button nzType="primary">{{ formTitle }}</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class DynamicFormComponent implements OnInit {
  public _config:any[] = [];

  @Input()
  set config(val) {
    if(val) {
      this._config = val;
      this.form = this.createGroup();
    }
  }

  @Input()
  formTitle:string;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  createGroup() {
    console.log(this._config);
    const group = this.fb.group({});
    this._config.forEach(control => {
      group.addControl(control.field_name, this.fb.control(control.config.default_value, [Validators.required] ));
    });
    console.log(group);
    return group;
  }
  
}