import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../core/http-request/http-request.service';
import { ApiData } from '../../../data/interface.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  config = [
    {
      type: 'textarea',
      label: '个人简介',
      name: 'textarea',
      value: '',
      placeholder: '填写您的简介',
    },
    {
      type: 'radio',
      label: '性别',
      name: 'radio',
      value: 'nv',
      options: [
        { value: 'nan', label: '男'},
        { value: 'nv', label: '女'}
      ],
      placeholder: ''
    },
    {
      type: 'checkbox',
      label: '性别',
      name: 'checkbox',
      value: [
        { label: 'Apple', value: 'Apple', checked: true },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' }
      ],
      placeholder: ''
    },
    {
      type: 'select',
      label: '行业选择',
      name: 'select',
      value: 'Knakworstje',
      options: [
        {label: 'Pizza', value: 'Pizza'},
        {label: 'Hot Dogs', value: 'Hot Dogs'},
        {label: 'Knakworstje', value: 'Knakworstje'},
        {label: 'Coffee', value: 'Coffee'}
      ],
      placeholder: 'Select an option',
    },
    {
      type: 'dateDay',
      label: '开始日期',
      name: 'start_date',
      value: '2018-09-21',
      placeholder: 'select start date',
    },
    {
      type: 'dateDay',
      label: '结束日期',
      name: 'end_date',
      value: '',
      placeholder: 'select end date',
    },
    {
      type: 'dateTime',
      label: 'timepicker',
      name: 'timepicker',
      value: '',
      placeholder: 'Select an timepicker',
    },
    {
      type: 'cascader',
      label: '工作地址',
      name: 'address',
      // value: ["zhejiang", "hangzhou", "xihu"],
      options: [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [{
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }]
        }, {
          value: 'ningbo',
          label: 'Ningbo',
          isLeaf: true
        }]
      }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
          value: 'nanjing',
          label: 'Nanjing',
          children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }]
        }]
      }],
      placeholder: 'Select an cascader',
    },
    {
      type: 'inputtext',
      label: '姓名',
      name: 'text',
      value: '张三',
      placeholder: 'Enter your name',
    },
    {
      type: 'inputnumber',
      label: '电话号码',
      name: 'phoneNumber',
      value: '',
      placeholder: 'Enter your phoneNumber',
    },
    {
      type: 'editor',
      label: 'editor',
      name: 'editor',
      value: '',
      placeholder: 'Enter your 简介',
    },
    {
      type: 'file',
      label: '单个文件',
      name: 'file',
      value:  null,
      placeholder: 'Choose your 单个文件',
    },
    {
      type: 'multiplefile',
      label: '多个文件',
      name: 'files',
      value: null,
      placeholder: 'Choose your 多个文件',
    },
    {
      type: 'image',
      label: '单个图片',
      name: 'image',
      value: null,
      placeholder: 'Choose your 单个图片',
    },
    {
      type: 'multipleimage',
      label: '多张图片',
      name: 'images',
      value: null,
      placeholder: 'Choose your 多张图片',
    },
    {
      type: 'button',
      label: '提交',
    },
  ];

  constructor(
    private httpRequest: HttpRequestService,
  ) { }

  ngOnInit() {

  }

  formSubmitted(value) {
    console.log(value);
  let option = new FormData();
    option.append('s', value.files);
    // this.httpRequest.post('http://tfjyw.cdtfhr.com/api/fileuploadtest', option).subscribe((res:ApiData) => {
    //   console.log(res);
      
    // })
  }

}
