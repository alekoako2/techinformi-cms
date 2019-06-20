import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  languageList = [
    {code: 'ka', label: 'ქართული'},
    {code: 'en', label: 'English'},
  ];

  constructor(@Inject(LOCALE_ID) public localeId: string) {
  }

  ngOnInit() {
  }

}
