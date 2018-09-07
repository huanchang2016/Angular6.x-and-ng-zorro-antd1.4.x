import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicService } from '../../service/dynamic.service';

@Component({
  selector: 'app-form-timepicker',
  templateUrl: './form-timepicker.component.html',
  styleUrls: ['./form-timepicker.component.scss']
})
export class FormTimepickerComponent implements OnInit {
  config;
  group: FormGroup;
  public date:any;

  constructor(
    private dynamicService: DynamicService,
  ) { }

  ngOnInit() {
    this.date = this.config.value;
  }

  dateChange(date) {
    console.log(date);
    this.group.value[this.config.name] = this.dynamicService.dealDatePickerTime(date);
  }
}
