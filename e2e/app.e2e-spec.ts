import { MrFrontendPage } from './app.po';

describe('mr-frontend App', () => {
  let page: MrFrontendPage;

  beforeEach(() => {
    page = new MrFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
