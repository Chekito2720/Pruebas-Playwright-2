import { Page, Locator } from '@playwright/test';

export class HomePage {
  static readonly URL = '/';

  readonly page: Page;

  readonly addToCartButtons: Locator;
  readonly viewProductButtons: Locator;
  readonly sliderItems: Locator;
  readonly subscriptionEmail: Locator;
  readonly subscriptionButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButtons = page.getByRole('button', { name: /Add to cart/ }).or(page.locator('a:has-text("Add to cart")'));
    this.viewProductButtons = page.getByRole('link', { name: /View Product/ }).or(page.locator('a:has-text("View Product")'));
    this.sliderItems = page.locator('.item, .carousel-item, .slider-item');
    this.subscriptionEmail = page.locator('#susbscribe_email, input[name="email"], input[type="email"]');
    this.subscriptionButton = page.getByRole('button', { name: /Subscribe/ }).or(page.locator('#subscribe, input[type="submit"]'));
  }

  async open(): Promise<void> {
    await this.page.goto(HomePage.URL);
  }

  async clickAddToCart(index: number): Promise<void> {
    await this.addToCartButtons.nth(index).click();
  }

  async clickViewProduct(index: number): Promise<void> {
    await this.viewProductButtons.nth(index).click();
  }

  async subscribe(email: string): Promise<void> {
    await this.subscriptionEmail.first().fill(email);
    await this.subscriptionButton.first().click();
  }
}
