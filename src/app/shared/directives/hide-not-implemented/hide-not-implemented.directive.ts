import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[hideNotImplemented]',
})
export class HideNotImplementedDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.display = 'none'
  }
}
