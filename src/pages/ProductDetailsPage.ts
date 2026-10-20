import { Page, Locator } from '@playwright/test';

export class ProductDetailsPage {
  static readonly URL = '/product_details/';

  readonly page: Page;

  readonly addToCartButton: Locator;
  readonly quantityInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.getByRole('button', { name: /Add to cart/ }).or(page.locator('.cart > button, .add-to-cart'));
    this.quantityInput = page.locator('#quantity, input[name="quantity"], input[type="number"]');
  }

  async open(productId: number): Promise<void> {
    await this.page.goto(`${ProductDetailsPage.URL}${productId}`);
  }

  async setQuantity(qty: number): Promise<void> {
    await this.quantityInput.first().fill(qty.toString());
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.first().click();
  }
}
