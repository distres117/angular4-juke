import { Angular4JukePage } from './app.po';

describe('angular4-juke App', () => {
  let page: Angular4JukePage;

  beforeEach(() => {
    page = new Angular4JukePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
