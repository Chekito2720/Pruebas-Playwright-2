import { test, expect } from '../src/fixtures';

test.describe('Carrito de Compras', () => {
  test('CT01 Ver carrito vacío por URL directa', async ({ cartPage, page }) => {
    await cartPage.open();
    await expect(page).toHaveURL(/view_cart/);
  });

  test('CT02 Acceso directo a carrito muestra página', async ({ page }) => {
    await page.goto('/view_cart');
    await expect(page).toHaveURL(/view_cart/);
  });

  test('CT03 Cuerpo de página carrito visible', async ({ cartPage, page }) => {
    await cartPage.open();
    await expect(page.locator('body')).toBeVisible();
  });

  test('CT04 Título de pestaña carrito', async ({ cartPage, page }) => {
    await cartPage.open();
    const title = await page.title();
    expect(title).toContain('Automation Exercise');
  });

  test('CT05 Navegar de carrito a inicio por URL', async ({ cartPage, page }) => {
    await cartPage.open();
    await page.goto('/');
    await expect(page).toHaveURL('/');
  });
});
