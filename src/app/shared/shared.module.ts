import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule, NzCardModule, NzInputModule, NzSelectModule, NzMenuModule, NzBackTopModule, NzCarouselModule, NzFormModule, NzCheckboxModule, NzGridModule, NzTabsModule, NzRadioModule, NzCascaderModule, NzDatePickerModule, NzTimePickerModule, NzInputNumberModule, NzUploadModule, NzModalModule, NzToolTipModule, NzStepsModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CKEditorModule, CKEditorComponent } from 'ng2-ckeditor';
// ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

// 使用TranslateHttpLoader加载项目的本地语言json配置文件
function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { LangComponent } from './lang/lang.component';
import { EditorComponent } from './editor/editor.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderTopComponent } from './component/header-top/header-top.component';

const CORECOMPONENT = [
  LangComponent,
  EditorComponent,
  HeaderComponent,
  NavbarComponent,
  FooterComponent,
  HeaderTopComponent
];

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
  NzToolTipModule,
  NzStepsModule,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CKEditorModule,
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
    LoginComponent,
    ...CORECOMPONENT,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ..._NZMODULEARRAY,
    ...CORECOMPONENT,
  ],
  entryComponents: [
    LoginComponent,
  ]
})
export class SharedModule { }
