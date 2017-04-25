import { UserDemoPage } from './app.po';

describe('user-demo App', () => {
  let page: UserDemoPage;

  beforeEach(() => {
    page = new UserDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
