import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

  constructor(private translateServices:TranslateService) { 

    this.translateServices.setDefaultLang('en');

    const savedLang  = localStorage.getItem('lang');


    if(savedLang){
      this.translateServices.use(  savedLang  );
    }
  }
}
