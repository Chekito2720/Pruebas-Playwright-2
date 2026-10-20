import { test, expect } from '../src/fixtures';

test.describe('Checkout - Proceso de Compra', () => {
  test('CO01 Página de checkout carga directamente', async ({ page }) => {
    await page.goto('/checkout');
    await expect(page).toHaveURL(/checkout/);
  });

  test('CO02 Cuerpo de página checkout visible', async ({ page }) => {
    await page.goto('/checkout');
    await expect(page.locator('body')).toBeVisible();
  });

  test('CO03 Título de pestaña checkout', async ({ page }) => {
    await page.goto('/checkout');
    await expect(page.title()).toContain('Automation Exercise');
  });

  test('CO04 Página de pago carga directamente', async ({ page }) => {
    await page.goto('/payment');
    await expect(page).toHaveURL(/payment/);
  });

  test('CO05 Cuerpo de página de pago visible', async ({ page }) => {
    await page.goto('/payment');
    await expect(page.locator('body')).toBeVisible();
  });

  test('CO06 Navegar de checkout a carrito por URL', async ({ page }) => {
    await page.goto('/checkout');
    await page.goto('/view_cart');
    await expect(page).toHaveURL(/view_cart/);
  });

  test('CO07 Navegar de carrito a checkout por URL', async ({ page }) => {
    await page.goto('/view_cart');
    await page.goto('/checkout');
    await expect(page).toHaveURL(/checkout/);
  });
});
