import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule, NzCardModule, NzInputModule, NzSelectModule, NzMenuModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const _NZMODULEARRAY = [
  NzButtonModule,
  NzCardModule,
  NzInputModule,
  NzSelectModule,
  NzMenuModule,
]

@NgModule({
  imports: [
    CommonModule,
    ..._NZMODULEARRAY,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ..._NZMODULEARRAY,
  ],
  entryComponents: [

  ]
})
export class SharedModule { }
