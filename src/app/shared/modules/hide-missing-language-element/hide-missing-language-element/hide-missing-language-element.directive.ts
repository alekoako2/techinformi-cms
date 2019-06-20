import {Directive, ElementRef, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Directive({
  selector: '[appHideMissingLanguageElement]'
})
export class HideMissingLanguageElementDirective implements OnInit {

  constructor(private el: ElementRef, @Inject(LOCALE_ID) public localeId: string) {
  }

  ngOnInit(): void {
    if (this.localeId === 'en') {
      this.el.nativeElement.style.display = 'none';
    }
  }


}
