import { test, expect } from '../src/fixtures';

test.describe('Navegación Directa - Páginas Principales', () => {
  test('NAV01 Cargar página de inicio', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
  });

  test('NAV02 Cargar página de productos por URL directa', async ({ page }) => {
    await page.goto('/products');
    await expect(page).toHaveURL(/products/);
  });

  test('NAV03 Cargar página de carrito por URL directa', async ({ page }) => {
    await page.goto('/view_cart');
    await expect(page).toHaveURL(/view_cart/);
  });

  test('NAV04 Cargar página de login por URL directa', async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveURL(/login/);
  });

  test('NAV05 Cargar página de Contact Us por URL directa', async ({ page }) => {
    await page.goto('/contact_us');
    await expect(page).toHaveURL(/contact_us/);
  });

  test('NAV06 Cargar página de Test Cases por URL directa', async ({ page }) => {
    await page.goto('/test_cases');
    await expect(page).toHaveURL(/test_cases/);
  });

  test('NAV07 Cargar página de API Testing por URL directa', async ({ page }) => {
    await page.goto('/api_list');
    await expect(page).toHaveURL(/api_list/);
  });

  test('NAV08 Navegar de inicio a productos por URL', async ({ page }) => {
    await page.goto('/');
    await page.goto('/products');
    await expect(page).toHaveURL(/products/);
  });

  test('NAV09 Navegar de productos a carrito por URL', async ({ page }) => {
    await page.goto('/products');
    await page.goto('/view_cart');
    await expect(page).toHaveURL(/view_cart/);
  });

  test('NAV10 Navegar de carrito a login por URL', async ({ page }) => {
    await page.goto('/view_cart');
    await page.goto('/login');
    await expect(page).toHaveURL(/login/);
  });

  test('NAV11 Navegar de login a contacto por URL', async ({ page }) => {
    await page.goto('/login');
    await page.goto('/contact_us');
    await expect(page).toHaveURL(/contact_us/);
  });

  test('NAV12 Navegar de contacto a test cases por URL', async ({ page }) => {
    await page.goto('/contact_us');
    await page.goto('/test_cases');
    await expect(page).toHaveURL(/test_cases/);
  });

  test('NAV13 Navegar de test cases a API testing por URL', async ({ page }) => {
    await page.goto('/test_cases');
    await page.goto('/api_list');
    await expect(page).toHaveURL(/api_list/);
  });

  test('NAV14 Cuerpo de la página visible en inicio', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });

  test('NAV15 Cuerpo de la página visible en productos', async ({ page }) => {
    await page.goto('/products');
    await expect(page.locator('body')).toBeVisible();
  });

  test('NAV16 Navegación rápida entre múltiples páginas', async ({ page }) => {
    await page.goto('/');
    await page.goto('/products');
    await page.goto('/view_cart');
    await page.goto('/login');
    await page.goto('/contact_us');
    await expect(page).toHaveURL(/contact_us/);
  });
});
