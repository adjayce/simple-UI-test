import { UitestPage } from './app.po';

describe('uitest App', function() {
  let page: UitestPage;

  beforeEach(() => {
    page = new UitestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
