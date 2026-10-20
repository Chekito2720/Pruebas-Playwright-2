import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  static readonly URL = '/products';

  readonly page: Page;

  readonly addToCartButtons: Locator;
  readonly viewProductButtons: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButtons = page.getByRole('button', { name: /Add to cart/ }).or(page.locator('a:has-text("Add to cart")'));
    this.viewProductButtons = page.getByRole('link', { name: /View Product/ }).or(page.locator('a:has-text("View Product")'));
    this.searchInput = page.locator('input[name="search"], #search_product, input[placeholder*="search"]');
    this.searchButton = page.getByRole('button', { name: /Search/ }).or(page.locator('#submit_search, button[type="submit"]'));
  }

  async open(): Promise<void> {
    await this.page.goto(ProductsPage.URL);
  }

  async getProductCount(): Promise<number> {
    return await this.addToCartButtons.count();
  }

  async search(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchButton.first().click();
  }

  async clickAddToCart(index: number): Promise<void> {
    await this.addToCartButtons.nth(index).click();
  }

  async clickViewProduct(index: number): Promise<void> {
    await this.viewProductButtons.nth(index).click();
  }

  async clickCategory(href: string): Promise<void> {
    await this.page.locator(`a[href="${href}"]`).first().click();
  }

  async clickBrand(href: string): Promise<void> {
    await this.page.locator(`a[href="${href}"]`).first().click();
  }
}
