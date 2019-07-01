import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Component({
  selector: 'app-square-language-with-text',
  templateUrl: './square-language-with-text.component.html',
  styleUrls: ['./square-language-with-text.component.scss']
})
export class SquareLanguageWithTextComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string) {
  }

  ngOnInit() {
  }

}
