import { Page, Locator } from '@playwright/test';

export class OrderCompletePage {
  static readonly URL = '/checkout';

  readonly page: Page;

  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continueButton = page.getByRole('button', { name: /Continue/ }).or(page.locator('.btn-primary'));
  }

  async continueToHome(): Promise<void> {
    await this.continueButton.first().click();
  }
}
