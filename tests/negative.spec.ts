import { test, expect } from '../src/fixtures';

test.describe('Casos Negativos y Edge Cases', () => {
  test('NG01 Acceder a página inexistente', async ({ page }) => {
    await page.goto('/pagina-inexistente-xyz-12345');
    await expect(page.locator('body')).toBeVisible();
  });

  test('NG02 Acceder a /delete_account sin sesión', async ({ page }) => {
    await page.goto('/delete_account');
    await expect(page).toHaveURL(/login|delete_account/);
  });

  test('NG03 Acceder a URL con parámetros inválidos', async ({ page }) => {
    await page.goto('/products?invalid=123');
    await expect(page).toHaveURL(/products/);
  });

  test('NG04 Refrescar página de productos', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.page.reload();
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('NG05 Refrescar página de login', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.page.reload();
    await expect(loginPage.page).toHaveURL(/login/);
  });

  test('NG06 Refrescar página de inicio', async ({ page }) => {
    await page.goto('/');
    await page.reload();
    await expect(page).toHaveURL('/');
  });

  test('NG07 Botón atrás del navegador en productos', async ({ productsPage, page }) => {
    await productsPage.open();
    await productsPage.clickViewProduct(0);
    await page.goBack();
    await expect(page).toHaveURL(/products/);
  });

  test('NG08 Botón adelante del navegador', async ({ productsPage, page }) => {
    await productsPage.open();
    await productsPage.clickViewProduct(0);
    await page.goBack();
    await page.goForward();
    await expect(page).toHaveURL(/product_details/);
  });

  test('NG09 URL con mayúsculas y minúsculas', async ({ page }) => {
    await page.goto('/Products');
    await expect(page).toHaveURL(/products/);
  });

  test('NG10 URL con barra final', async ({ page }) => {
    await page.goto('/products/');
    await expect(page).toHaveURL(/products/);
  });

  test('NG11 Acceder a producto con ID muy grande', async ({ productDetailsPage }) => {
    await productDetailsPage.open(999999);
    await expect(productDetailsPage.page).toHaveURL(/product_details\/999999/);
  });

  test('NG12 Acceder a producto con ID 0', async ({ productDetailsPage }) => {
    await productDetailsPage.open(0);
    await expect(productDetailsPage.page).toHaveURL(/product_details\/0/);
  });

  test('NG13 Acceder a producto con ID negativo', async ({ productDetailsPage }) => {
    await productDetailsPage.open(-1);
    await expect(productDetailsPage.page).toHaveURL(/product_details\/-1/);
  });

  test('NG14 Cuerpo de página visible en producto inexistente', async ({ productDetailsPage, page }) => {
    await productDetailsPage.open(999999);
    await expect(page.locator('body')).toBeVisible();
  });

  test('NG15 Navegación rápida entre múltiples páginas', async ({ page }) => {
    await page.goto('/');
    await page.goto('/products');
    await page.goto('/view_cart');
    await page.goto('/login');
    await page.goto('/contact_us');
    await expect(page).toHaveURL(/contact_us/);
  });
});
