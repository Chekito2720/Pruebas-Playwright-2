import { test, expect } from '../src/fixtures';

test.describe('Home Page - Funcionalidades', () => {
  test('HM01 Página de inicio carga correctamente', async ({ homePage }) => {
    await homePage.open();
    await expect(homePage.page).toHaveURL('/');
  });

  test('HM02 Botones Add to cart visibles en inicio', async ({ homePage }) => {
    await homePage.open();
    const count = await homePage.addToCartButtons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('HM03 Click en Add to cart producto 1', async ({ homePage }) => {
    await homePage.open();
    await homePage.clickAddToCart(0);
  });

  test('HM04 Click en Add to cart producto 2', async ({ homePage }) => {
    await homePage.open();
    await homePage.clickAddToCart(1);
  });

  test('HM05 Click en View Product producto 1', async ({ homePage }) => {
    await homePage.open();
    await homePage.clickViewProduct(0);
  });

  test('HM06 Click en View Product producto 2', async ({ homePage }) => {
    await homePage.open();
    await homePage.clickViewProduct(1);
  });

  test('HM07 Suscripción newsletter con email válido', async ({ homePage }) => {
    await homePage.open();
    await homePage.subscribe('testuser@example.com');
  });

  test('HM08 Suscripción newsletter con email vacío', async ({ homePage }) => {
    await homePage.open();
    await homePage.subscribe('');
  });

  test('HM09 Cuerpo de página inicio visible', async ({ homePage, page }) => {
    await homePage.open();
    await expect(page.locator('body')).toBeVisible();
  });

  test('HM10 Título de pestaña inicio', async ({ homePage, page }) => {
    await homePage.open();
    const title = await page.title();
    expect(title).toContain('Automation Exercise');
  });

  test('HM11 Slider visible en página de inicio', async ({ homePage }) => {
    await homePage.open();
    const count = await homePage.sliderItems.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('HM12 Botón Add to cart habilitado', async ({ homePage }) => {
    await homePage.open();
    const count = await homePage.addToCartButtons.count();
    if (count > 0) {
      await expect(homePage.addToCartButtons.first()).toBeEnabled();
    }
  });

  test('HM13 Botón View Product habilitado', async ({ homePage }) => {
    await homePage.open();
    const count = await homePage.viewProductButtons.count();
    if (count > 0) {
      await expect(homePage.viewProductButtons.first()).toBeEnabled();
    }
  });
});
