import { test, expect } from '../src/fixtures';

test.describe('Checkout - Sin Sesión', () => {
  test('CO01 Acceso directo a checkout muestra página', async ({ page }) => {
    await page.goto('/checkout');
    await expect(page).toHaveURL(/checkout/);
  });

  test('CO02 Cuerpo de página checkout visible', async ({ page }) => {
    await page.goto('/checkout');
    await expect(page.locator('body')).toBeVisible();
  });
});
