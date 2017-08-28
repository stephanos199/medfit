import { MedfitPage } from './app.po';

describe('medfit App', () => {
  let page: MedfitPage;

  beforeEach(() => {
    page = new MedfitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
