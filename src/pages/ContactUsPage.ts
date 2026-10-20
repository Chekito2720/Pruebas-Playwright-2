import { Page, Locator } from '@playwright/test';

export class ContactUsPage {
  static readonly URL = '/contact_us';

  readonly page: Page;

  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageTextarea: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('input[name="name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.subjectInput = page.locator('input[name="subject"]');
    this.messageTextarea = page.locator('textarea[name="message"]');
    this.submitButton = page.getByRole('button', { name: /Submit/ }).or(page.locator('input[type="submit"]'));
  }

  async open(): Promise<void> {
    await this.page.goto(ContactUsPage.URL);
  }

  async submitContactForm(data: { name: string; email: string; subject: string; message: string }): Promise<void> {
    await this.nameInput.first().fill(data.name);
    await this.emailInput.first().fill(data.email);
    await this.subjectInput.first().fill(data.subject);
    await this.messageTextarea.first().fill(data.message);
    await this.submitButton.first().click();
  }
}
