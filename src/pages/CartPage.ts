import { Page, Locator } from '@playwright/test';

export class CartPage {
  static readonly URL = '/view_cart';

  readonly page: Page;

  readonly proceedToCheckout: Locator;
  readonly registerLoginButton: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.proceedToCheckout = page.getByRole('link', { name: /Proceed To Checkout/ }).or(page.locator('.check_out, .checkout-button'));
    this.registerLoginButton = page.getByRole('link', { name: /Register \/ Login/ }).or(page.locator('.register-login, .register-login-button'));
    this.emptyCartMessage = page.getByText(/Cart is empty/).or(page.locator('.cart-empty, .empty-cart-message'));
  }

  async open(): Promise<void> {
    await this.page.goto(CartPage.URL);
  }

  async proceedToCheckoutClick(): Promise<void> {
    await this.proceedToCheckout.first().click();
  }

  async clickRegisterLogin(): Promise<void> {
    await this.registerLoginButton.first().click();
  }

  async isEmpty(): Promise<boolean> {
    return await this.emptyCartMessage.first().isVisible();
  }
}
