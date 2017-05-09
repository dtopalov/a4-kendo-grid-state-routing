import { GridRoutingPersistStatePage } from './app.po';

describe('grid-routing-persist-state App', () => {
  let page: GridRoutingPersistStatePage;

  beforeEach(() => {
    page = new GridRoutingPersistStatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
