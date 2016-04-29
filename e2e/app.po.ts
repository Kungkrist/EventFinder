export class EventFinderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('event-finder-app p')).getText();
  }
}
