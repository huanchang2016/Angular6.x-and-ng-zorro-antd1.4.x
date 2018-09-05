import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  config = [
    {
      type: 'textarea',
      label: 'textarea',
      name: 'textarea',
      value: 'textarea',
      placeholder: 'Enter your name',
    },
    {
      type: 'radio',
      label: '性别',
      name: 'radio',
      value: 'nv',
      options: ['nan', 'nv'],
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
      label: 'select',
      name: 'select',
      value: 'Knakworstje',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
    },
    {
      type: 'datepicker',
      label: 'datepicker',
      name: 'datepicker',
      value: '',
      placeholder: 'Select an datepicker',
    },
    {
      type: 'timepicker',
      label: 'timepicker',
      name: 'timepicker',
      value: '',
      placeholder: 'Select an timepicker',
    },
    {
      type: 'cascader',
      label: 'cascader',
      name: 'cascader',
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
      label: 'Full name',
      name: 'text',
      value: '张三',
      placeholder: 'Enter your name',
    },
    {
      type: 'inputnumber',
      label: '电话号码',
      name: 'inputnumber',
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
      type: 'button',
      label: 'Submit',
      name: 'submit',
    },
  ];

  constructor() { }

  ngOnInit() {

  }

  formSubmitted(value) {
    console.log(value);
  }

}
