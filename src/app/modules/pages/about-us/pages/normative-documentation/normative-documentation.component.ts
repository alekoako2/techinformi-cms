import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Component({
  selector: 'app-normative-documentation',
  templateUrl: './normative-documentation.component.html',
  styleUrls: ['./normative-documentation.component.scss']
})
export class NormativeDocumentationComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string) {
  }

  ngOnInit() {
  }

}
