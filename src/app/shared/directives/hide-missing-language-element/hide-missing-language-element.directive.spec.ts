import { HideMissingLanguageElementDirective } from './hide-missing-language-element.directive'

describe('HideMissingLanguageElementDirective', () => {
  it('should create an instance', () => {
    const elRefMock = {
      nativeElement: document.createElement('div'),
    }

    const localeIdMock: string = null

    const directive = new HideMissingLanguageElementDirective(
      elRefMock,
      localeIdMock
    )
    expect(directive).toBeTruthy()
  })
})
