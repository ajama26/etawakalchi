import { ProductappPage } from './app.po';

describe('productapp App', function() {
  let page: ProductappPage;

  beforeEach(() => {
    page = new ProductappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
