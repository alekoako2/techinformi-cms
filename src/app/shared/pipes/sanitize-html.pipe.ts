import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(v?: string, type?: string): SafeHtml {
    if (!v) {
      return '';
    }
    if (type === 'url') {
      return this.sanitizeUrl(v);
    }
    return this.sanitizeHtml(v);
  }

  sanitizeHtml(v: string) {
    return this.sanitizer.bypassSecurityTrustHtml(v);
  }

  sanitizeUrl(v: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(v);
  }

}
