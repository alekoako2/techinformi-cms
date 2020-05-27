import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({
  name: 'sanitizeHtml',
})
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  transform(value: string, type = 'html'): SafeHtml {
    if (type === 'html') {
      return this._sanitizer.bypassSecurityTrustHtml(value)
    } else {
      return this._sanitizer.bypassSecurityTrustUrl(value)
    }
  }
}
