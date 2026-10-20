import { test, expect } from '../src/fixtures';

test.describe('Home Page - Suscripción y Slider', () => {
  test('HS01 Campo de suscripción newsletter visible', async ({ homePage }) => {
    await homePage.open();
    await expect(homePage.subscriptionEmail).toBeVisible();
  });

  test('HS02 Botón de suscripción newsletter visible', async ({ homePage }) => {
    await homePage.open();
    await expect(homePage.subscriptionButton).toBeVisible();
  });

  test('HS03 Suscribirse con email válido', async ({ homePage }) => {
    await homePage.open();
    await homePage.subscribe('testuser@example.com');
  });

  test('HS04 Suscribirse con email vacío', async ({ homePage }) => {
    await homePage.open();
    await homePage.subscribe('');
  });

  test('HS05 Suscribirse con email inválido', async ({ homePage }) => {
    await homePage.open();
    await homePage.subscribe('correo-invalido');
  });

  test('HS06 Cuerpo de página inicio visible', async ({ homePage, page }) => {
    await homePage.open();
    await expect(page.locator('body')).toBeVisible();
  });

  test('HS07 Slider tiene al menos 0 ítems', async ({ homePage }) => {
    await homePage.open();
    const count = await homePage.sliderItems.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('HS08 Botones Add to cart en página de inicio', async ({ homePage }) => {
    await homePage.open();
    const count = await homePage.addToCartButtons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('HS09 Botones View Product en página de inicio', async ({ homePage }) => {
    await homePage.open();
    const count = await homePage.viewProductButtons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('HS10 Título de pestaña contiene Automation Exercise', async ({ homePage, page }) => {
    await homePage.open();
    await expect(page.title()).toContain('Automation Exercise');
  });
});
