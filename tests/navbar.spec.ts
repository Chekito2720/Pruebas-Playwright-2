import { test, expect } from '../src/fixtures';

test.describe('Navbar - Enlaces', () => {
  test('NB01 Enlace Home visible', async ({ navbar }) => {
    await navbar.openHome();
    await expect(navbar.homeLink).toBeVisible();
  });

  test('NB02 Enlace Products visible', async ({ navbar }) => {
    await navbar.openHome();
    await expect(navbar.productsLink).toBeVisible();
  });

  test('NB03 Enlace Cart visible', async ({ navbar }) => {
    await navbar.openHome();
    await expect(navbar.cartLink).toBeVisible();
  });

  test('NB04 Enlace Signup/Login visible', async ({ navbar }) => {
    await navbar.openHome();
    await expect(navbar.signupLoginLink).toBeVisible();
  });

  test('NB05 Enlace Contact Us visible', async ({ navbar }) => {
    await navbar.openHome();
    await expect(navbar.contactUsLink).toBeVisible();
  });

  test('NB06 Enlace Test Cases visible', async ({ navbar }) => {
    await navbar.openHome();
    await expect(navbar.testCasesLink).toBeVisible();
  });

  test('NB07 Enlace API Testing visible', async ({ navbar }) => {
    await navbar.openHome();
    await expect(navbar.apiTestingLink).toBeVisible();
  });

  test('NB08 Enlace Video Tutorials visible', async ({ navbar }) => {
    await navbar.openHome();
    await expect(navbar.videoTutorialsLink).toBeVisible();
  });

  test('NB09 Todos los enlaces del navbar habilitados', async ({ navbar }) => {
    await navbar.openHome();
    await expect(navbar.homeLink).toBeEnabled();
    await expect(navbar.productsLink).toBeEnabled();
    await expect(navbar.cartLink).toBeEnabled();
    await expect(navbar.signupLoginLink).toBeEnabled();
    await expect(navbar.contactUsLink).toBeEnabled();
    await expect(navbar.testCasesLink).toBeEnabled();
  });
});
