import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicService } from '../../service/dynamic.service';

@Component({
  selector: 'app-form-datepicker',
  templateUrl: './form-datepicker.component.html',
  styleUrls: ['./form-datepicker.component.scss']
})
export class FormDatepickerComponent implements OnInit {
  config;
  group: FormGroup;
  public date:any;

  constructor(
    private dynamicService: DynamicService,
  ) { }
  
  ngOnInit() {
    this.date = this.config.config.default_value;
  }

  dateChange(date) {
    if(this.config.config.format === "Y-m") {
      this.group.value[this.config.field_name] = this.dynamicService.dealDatePickerMonth(date);
    }else if(this.config.config.format === "Y-m-d") {
      this.group.value[this.config.field_name] = this.dynamicService.dealDatePickerDay(date);
    }else {
      this.group.value[this.config.field_name] = this.dynamicService.dealDatePickerTime(date);
    }
  }
}
