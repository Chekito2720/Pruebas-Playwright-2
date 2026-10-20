import { test as base, expect } from '@playwright/test';
import { Navbar } from './pages/Navbar';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { OrderCompletePage } from './pages/OrderCompletePage';

type Fixtures = {
  navbar: Navbar;
  homePage: HomePage;
  productsPage: ProductsPage;
  productDetailsPage: ProductDetailsPage;
  loginPage: LoginPage;
  signupPage: SignupPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  contactUsPage: ContactUsPage;
  orderCompletePage: OrderCompletePage;
};

export const test = base.extend<Fixtures>({
  navbar: async ({ page }, use) => use(new Navbar(page)),
  homePage: async ({ page }, use) => use(new HomePage(page)),
  productsPage: async ({ page }, use) => use(new ProductsPage(page)),
  productDetailsPage: async ({ page }, use) => use(new ProductDetailsPage(page)),
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  signupPage: async ({ page }, use) => use(new SignupPage(page)),
  cartPage: async ({ page }, use) => use(new CartPage(page)),
  checkoutPage: async ({ page }, use) => use(new CheckoutPage(page)),
  contactUsPage: async ({ page }, use) => use(new ContactUsPage(page)),
  orderCompletePage: async ({ page }, use) => use(new OrderCompletePage(page)),
});

export { expect };
