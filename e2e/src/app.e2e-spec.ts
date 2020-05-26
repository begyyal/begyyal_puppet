import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getMainHeading()).toEqual('Hello, world!');
  });

  it('データフェッチが動く', () => {
    page.navigateTo();
    page.getFetchLink().click();
    expect(page.getFetchDataDate()).toEqual('unko');
  });
});
