import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {
// 语言选择
selectedLang:string = 'zh';

@Output()
emitLang: EventEmitter<any> = new EventEmitter();
  constructor(
    public translateService: TranslateService
  ) { }

  ngOnInit() {
    // --- set i18n begin ---
    this.translateService.addLangs(["zh", "en"]);
    this.translateService.setDefaultLang("zh");
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    // --- set i18n end ---
  }
  
  selectedLanguage ($event:string) :void {
    console.log($event);
    this.translateService.use($event);
  }
}
