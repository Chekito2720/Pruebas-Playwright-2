import { Page, Locator } from '@playwright/test';

export class SignupPage {
  static readonly URL = '/signup';

  readonly page: Page;

  readonly passwordInput: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.passwordInput = page.locator('input[name="password"], input[type="password"]');
    this.createAccountButton = page.getByRole('button', { name: /Create Account/ }).or(page.locator('button[type="submit"]'));
  }

  async open(): Promise<void> {
    await this.page.goto(SignupPage.URL);
  }

  async createAccount(): Promise<void> {
    await this.createAccountButton.first().click();
  }
}

export const DEFAULT_ACCOUNT_INFO = {
  title: 'Mr',
  name: 'Test User',
  email: 'testuser@example.com',
  password: 'password123',
};
