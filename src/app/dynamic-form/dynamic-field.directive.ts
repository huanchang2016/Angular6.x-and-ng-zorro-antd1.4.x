import { Directive, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from './component/form-button/form-button.component';
import { FormTextareaComponent } from './component/form-textarea/form-textarea.component';
import { FormRadioComponent } from './component/form-radio/form-radio.component';
import { FormCheckboxComponent } from './component/form-checkbox/form-checkbox.component';
import { FormSelectComponent } from './component/form-select/form-select.component';
import { FormDatepickerComponent } from './component/form-datepicker/form-datepicker.component';
import { FormTimepickerComponent } from './component/form-timepicker/form-timepicker.component';
import { FormCascaderComponent } from './component/form-cascader/form-cascader.component';
import { FormInputTextComponent } from './component/form-input-text/form-input-text.component';
import { FormInputNumberComponent } from './component/form-input-number/form-input-number.component';
import { FormEditorComponent } from './component/form-editor/form-editor.component';
import { FormFileComponent } from './component/form-file/form-file.component';
import { FormMultipleFileComponent } from './component/form-multiple-file/form-multiple-file.component';
import { FormImageComponent } from './component/form-image/form-image.component';
import { FormMultipleImagesComponent } from './component/form-multiple-images/form-multiple-images.component';

const components = {
  textarea: FormTextareaComponent,
  radio : FormRadioComponent,
  checkbox: FormCheckboxComponent,
  select: FormSelectComponent,
  datepicker: FormDatepickerComponent,
  timepicker :FormTimepickerComponent,
  cascader :FormCascaderComponent,
  inputtext :FormInputTextComponent,
  inputnumber :FormInputNumberComponent,
  editor :FormEditorComponent,
  file :FormFileComponent,
  multiplefile :FormMultipleFileComponent,
  image :FormImageComponent,
  multipleimage :FormMultipleImagesComponent,
  button: FormButtonComponent,
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input()
  config;

  @Input()
  group: FormGroup;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    // console.log(this.config);
    let component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    component = this.container.createComponent(factory);
    component.instance.config = this.config;
    component.instance.group = this.group;
  }
}