import {SanitizeHtmlPipe} from './sanitize-html.pipe';

describe('SanitizeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeHtmlPipe(undefined);
    expect(pipe).toBeTruthy();
  });
});
