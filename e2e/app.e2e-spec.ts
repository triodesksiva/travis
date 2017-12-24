import { TravisProjectPage } from './app.po';

describe('travis-project App', () => {
  let page: TravisProjectPage;

  beforeEach(() => {
    page = new TravisProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
