import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule, NzCardModule, NzInputModule, NzSelectModule, NzMenuModule, NzBackTopModule, NzCarouselModule, NzFormModule, NzCheckboxModule, NzGridModule, NzTabsModule, NzRadioModule, NzCascaderModule, NzDatePickerModule, NzTimePickerModule, NzInputNumberModule, NzUploadModule, NzModalModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { LangComponent } from './lang/lang.component';

// 使用TranslateHttpLoader加载项目的本地语言json配置文件
function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


const _NZMODULEARRAY = [
  NzButtonModule,
  NzCardModule,
  NzInputModule,
  NzSelectModule,
  NzMenuModule,
  NzBackTopModule,
  NzCarouselModule,
  NzFormModule,
  NzGridModule,
  NzTabsModule,
  NzRadioModule,
  NzCascaderModule,
  NzDatePickerModule,
  NzTimePickerModule,
  NzInputNumberModule,
  NzUploadModule,
  NzCheckboxModule,
  NzModalModule,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ..._NZMODULEARRAY,
    // 调用forRoot静态方法指定加载的文件
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [ HttpClient ]
        }
    }),
  ],
  declarations: [
    LangComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ..._NZMODULEARRAY,
    LangComponent,
  ],
  entryComponents: [

  ]
})
export class SharedModule { }
