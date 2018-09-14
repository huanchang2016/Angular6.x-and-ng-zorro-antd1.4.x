import { Directive, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormTextareaComponent } from './component/form-textarea/form-textarea.component';
import { FormRadioComponent } from './component/form-radio/form-radio.component';
import { FormCheckboxComponent } from './component/form-checkbox/form-checkbox.component';
import { FormSelectComponent } from './component/form-select/form-select.component';
import { FormInputTextComponent } from './component/form-input-text/form-input-text.component';
import { FormEditorComponent } from './component/form-editor/form-editor.component';
import { FormFileComponent } from './component/form-file/form-file.component';
import { FormMultipleFileComponent } from './component/form-multiple-file/form-multiple-file.component';
import { FormImageComponent } from './component/form-image/form-image.component';
import { FormMultipleImagesComponent } from './component/form-multiple-images/form-multiple-images.component';
import { FormDatepickerComponent } from './component/form-datepicker/form-datepicker.component';
import { FormMultipleSelectComponent } from './component/form-multiple-select/form-multiple-select.component';
import { FormGroupComponent } from './component/form-group/form-group.component';

const components = {
  text :FormInputTextComponent,
  textarea: FormTextareaComponent,
  editor :FormEditorComponent,
  radio : FormRadioComponent,
  select: FormSelectComponent,
  checkbox: FormCheckboxComponent,
  multiple: FormMultipleSelectComponent,
  image :FormImageComponent,
  images :FormMultipleImagesComponent,
  file :FormFileComponent,
  files :FormMultipleFileComponent,
  datetime :FormDatepickerComponent,
  group: FormGroupComponent

  // cascader :FormCascaderComponent,
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
    let component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    component = this.container.createComponent(factory);
    component.instance.config = this.config;
    component.instance.group = this.group;
  }
}