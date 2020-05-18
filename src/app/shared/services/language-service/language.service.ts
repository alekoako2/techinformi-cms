import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { LanguageCode } from '@graphql'

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private setCurrentLanguage(value: LanguageCode): void {
    this._currentLanguage = value
  }
  get currentLanguage(): LanguageCode {
    return this._currentLanguage
  }

  private _currentLanguage = LanguageCode.KA

  constructor(@Inject(LOCALE_ID) private localeId: string) {
    switch (localeId) {
      case 'en':
        this.setCurrentLanguage(LanguageCode.EN)
        break
      default:
        this.setCurrentLanguage(LanguageCode.KA)
    }
  }
}
