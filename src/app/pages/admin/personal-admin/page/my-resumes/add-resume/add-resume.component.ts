import { Component, OnInit } from '@angular/core';
import { ApiData } from '../../../../../../../data/interface.class';
import { PersonAdminService } from '../../../service/person-admin.service';

@Component({
  selector: 'app-add-resume',
  templateUrl: './add-resume.component.html',
  styleUrls: ['./add-resume.component.scss']
})
export class AddResumeComponent implements OnInit {
  public CONFIG:Array<any> = [];
 
  constructor(
    private personAdminService: PersonAdminService,
  ) { 
    this.personAdminService.getResumeDefaultConfig().subscribe((res:ApiData) => {
      console.log(res);
      if(res.code === 1 ){
        for (const key in res.data) {
          if (res.data.hasOwnProperty(key)) {
            const element = res.data[key];
            element.forEach( opt => {
              this.CONFIG.push(opt);
              // if(opt.type != 'group'){
              //   this.CONFIG.push(opt);
              // }else {
                // this.CONFIG.push(...(opt.config.option));
              // }
            });
          }
        }
      }
    })
  }

  ngOnInit() {

  }

  formSubmitted(value) {
    console.log(value);
    // let option = new FormData();
  }

}
