import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DynamicService } from './service/dynamic.service';
import { DynamicFieldDirective } from './dynamic-field.directive';

import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
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
import { FormDateMonthPickerComponent } from './component/form-date-month-picker/form-date-month-picker.component';


const DYNAMICCOMPONENT = [
  FormButtonComponent,
  FormTextareaComponent,
  FormRadioComponent,
  FormCheckboxComponent,
  FormSelectComponent,
  FormDatepickerComponent,
  FormTimepickerComponent,
  FormCascaderComponent,
  FormInputTextComponent,
  FormInputNumberComponent,
  FormEditorComponent,
  FormFileComponent,
  FormMultipleFileComponent,
  FormImageComponent,
  FormMultipleImagesComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    ...DYNAMICCOMPONENT,
    FormDateMonthPickerComponent,
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
