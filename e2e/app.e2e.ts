import { WebstimatePage } from './app.po';

describe('webstimate App', function() {
  let page: WebstimatePage;

  beforeEach(() => {
    page = new WebstimatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('webstimate works!');
  });
});
