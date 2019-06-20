import {Directive, ElementRef, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Directive({
  selector: '[appHideNotImplemented]',
})
export class HideNotImplementedDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.style.display = 'none';
  }

}
