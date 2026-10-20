import { Page, Locator } from '@playwright/test';

export class LoginPage {
  static readonly URL = '/login';

  readonly page: Page;

  readonly loginEmail: Locator;
  readonly loginPassword: Locator;
  readonly loginButton: Locator;
  readonly signupName: Locator;
  readonly signupEmail: Locator;
  readonly signupButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginEmail = page.locator('input[name="email"]').first();
    this.loginPassword = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: /^Login$/ });
    this.signupName = page.locator('input[name="name"]');
    this.signupEmail = page.locator('input[name="email"]').nth(1);
    this.signupButton = page.getByRole('button', { name: /^Signup$/ });
  }

  async open(): Promise<void> {
    await this.page.goto(LoginPage.URL);
  }

  async login(email: string, password: string): Promise<void> {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }

  async signup(name: string, email: string): Promise<void> {
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
  }
}

export const VALID_USER = {
  email: 'testuser@example.com',
  password: 'password123',
  name: 'Test User',
};

export const EXISTING_USER_EMAIL = 'existinguser@example.com';
