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
    this.date = this.config.value;
  }

  dateChange(date) {
    this.group.value[this.config.name] = this.dynamicService.dealDatePickerDay(date);
  }
}
