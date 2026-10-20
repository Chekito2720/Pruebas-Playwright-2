import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  static readonly URL = '/checkout';

  readonly page: Page;

  readonly placeOrderButton: Locator;
  readonly payButton: Locator;
  readonly nameOnCard: Locator;
  readonly cardNumber: Locator;
  readonly cvc: Locator;
  readonly expiryMonth: Locator;
  readonly expiryYear: Locator;

  constructor(page: Page) {
    this.page = page;
    this.placeOrderButton = page.getByRole('button', { name: /Place Order/ }).or(page.locator('.place_order'));
    this.payButton = page.getByRole('button', { name: /Pay/ }).or(page.locator('#submit'));
    this.nameOnCard = page.locator('input[name="name_on_card"]');
    this.cardNumber = page.locator('input[name="card_number"]');
    this.cvc = page.locator('input[name="cvc"]');
    this.expiryMonth = page.locator('input[name="expiry_month"]');
    this.expiryYear = page.locator('input[name="expiry_year"]');
  }

  async open(): Promise<void> {
    await this.page.goto(CheckoutPage.URL);
  }

  async fillPaymentDetails(card: { name: string; number: string; cvc: string; month: string; year: string }): Promise<void> {
    await this.nameOnCard.first().fill(card.name);
    await this.cardNumber.first().fill(card.number);
    await this.cvc.first().fill(card.cvc);
    await this.expiryMonth.first().fill(card.month);
    await this.expiryYear.first().fill(card.year);
  }

  async pay(): Promise<void> {
    await this.payButton.first().click();
  }

  async placeOrder(): Promise<void> {
    await this.placeOrderButton.first().click();
  }
}
