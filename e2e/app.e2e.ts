import { EventFinderPage } from './app.po';

describe('event-finder App', function() {
  let page: EventFinderPage;

  beforeEach(() => {
    page = new EventFinderPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('event-finder Works!');
  });
});
