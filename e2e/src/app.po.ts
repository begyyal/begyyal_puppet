import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  private xpathLocator(id: string) {
    return `//*[contains(@data-test, "${id}")]`;
  }

  getMainHeading() {
    return element(by.css('app-root h1')).getText();
  }

  getCounterLink(){
    return element(by.xpath(this.xpathLocator('counter')));
  }

  getFetchLink(){
    return element(by.xpath(this.xpathLocator('fetch-data')));
  }

  getFetchDataDate(){
    return element(by.xpath(this.xpathLocator('fetch-data-date'))).getText();
  }
}
