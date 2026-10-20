import { Page, Locator } from '@playwright/test';

export class Navbar {
  readonly page: Page;

  readonly homeLink: Locator;
  readonly productsLink: Locator;
  readonly cartLink: Locator;
  readonly signupLoginLink: Locator;
  readonly contactUsLink: Locator;
  readonly testCasesLink: Locator;
  readonly apiTestingLink: Locator;
  readonly videoTutorialsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.locator('a[href="/"]');
    this.productsLink = page.locator('a[href="/products"]');
    this.cartLink = page.locator('a[href="/view_cart"]');
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.contactUsLink = page.locator('a[href="/contact_us"]');
    this.testCasesLink = page.locator('a[href="/test_cases"]');
    this.apiTestingLink = page.locator('a[href="/api_list"]');
    this.videoTutorialsLink = page.locator('a[href*="youtube.com"]');
  }

  async openHome(): Promise<void> {
    await this.homeLink.first().click();
  }

  async openProducts(): Promise<void> {
    await this.productsLink.first().click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.first().click();
  }

  async openLogin(): Promise<void> {
    await this.signupLoginLink.first().click();
  }

  async openContactUs(): Promise<void> {
    await this.contactUsLink.first().click();
  }

  async openTestCases(): Promise<void> {
    await this.testCasesLink.first().click();
  }

  async openApiTesting(): Promise<void> {
    await this.apiTestingLink.first().click();
  }

  async openVideoTutorials(): Promise<void> {
    await this.videoTutorialsLink.first().click();
  }
}
