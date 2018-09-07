import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicService } from '../../service/dynamic.service';

@Component({
  selector: 'app-form-date-month-picker',
  templateUrl: './form-date-month-picker.component.html',
  styleUrls: ['./form-date-month-picker.component.scss']
})
export class FormDateMonthPickerComponent implements OnInit {
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
    this.group.value[this.config.name] = this.dynamicService.dealDatePickerTime(date);
  }
}
