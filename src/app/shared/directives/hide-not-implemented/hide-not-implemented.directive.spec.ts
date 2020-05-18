import { HideNotImplementedDirective } from './hide-not-implemented.directive'

describe('HideNotImplementedDirective', () => {
  it('should create an instance', () => {
    const elRefMock = {
      nativeElement: document.createElement('div'),
    }

    const directive = new HideNotImplementedDirective(elRefMock)
    expect(directive).toBeTruthy()
  })
})
