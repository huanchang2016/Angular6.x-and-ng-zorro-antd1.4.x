import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DynamicService } from './service/dynamic.service';
import { DynamicFieldDirective } from './dynamic-field.directive';

import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { FormTextareaComponent } from './component/form-textarea/form-textarea.component';
import { FormRadioComponent } from './component/form-radio/form-radio.component';
import { FormCheckboxComponent } from './component/form-checkbox/form-checkbox.component';
import { FormSelectComponent } from './component/form-select/form-select.component';
import { FormDatepickerComponent } from './component/form-datepicker/form-datepicker.component';
import { FormCascaderComponent } from './component/form-cascader/form-cascader.component';
import { FormInputTextComponent } from './component/form-input-text/form-input-text.component';
import { FormEditorComponent } from './component/form-editor/form-editor.component';
import { FormFileComponent } from './component/form-file/form-file.component';
import { FormMultipleFileComponent } from './component/form-multiple-file/form-multiple-file.component';
import { FormImageComponent } from './component/form-image/form-image.component';
import { FormMultipleImagesComponent } from './component/form-multiple-images/form-multiple-images.component';
import { FormMultipleSelectComponent } from './component/form-multiple-select/form-multiple-select.component';
import { FormGroupComponent } from './component/form-group/form-group.component';
import { CreatFormComponent } from './component/form-group/creat-form/creat-form.component';
import { DynamicGroupComponent } from './component/form-group/dynamic-group/dynamic-group.component';


const DYNAMICCOMPONENT = [
  FormTextareaComponent,
  FormRadioComponent,
  FormCheckboxComponent,
  FormSelectComponent,
  FormMultipleSelectComponent,
  FormDatepickerComponent,
  FormCascaderComponent,
  FormInputTextComponent,
  FormEditorComponent,
  FormFileComponent,
  FormMultipleFileComponent,
  FormImageComponent,
  FormMultipleImagesComponent,
  FormGroupComponent,
  CreatFormComponent,
  DynamicGroupComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    ...DYNAMICCOMPONENT,
  ],
  entryComponents: [
    ...DYNAMICCOMPONENT,
  ],
  exports: [
    DynamicFormComponent,
  ],
  providers: [
    DynamicService,
  ]
})
export class DynamicFormModule { }
