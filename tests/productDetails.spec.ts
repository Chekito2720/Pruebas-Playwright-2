import { test, expect } from '../src/fixtures';

test.describe('Detalle de Producto', () => {
  test('PD01 Ver detalle de producto ID 1', async ({ productDetailsPage }) => {
    await productDetailsPage.open(1);
    await expect(productDetailsPage.page).toHaveURL(/product_details\/1/);
  });

  test('PD02 Ver detalle de producto ID 2', async ({ productDetailsPage }) => {
    await productDetailsPage.open(2);
    await expect(productDetailsPage.page).toHaveURL(/product_details\/2/);
  });

  test('PD03 Ver detalle de producto ID 3', async ({ productDetailsPage }) => {
    await productDetailsPage.open(3);
    await expect(productDetailsPage.page).toHaveURL(/product_details\/3/);
  });

  test('PD04 Ver detalle de producto ID 4', async ({ productDetailsPage }) => {
    await productDetailsPage.open(4);
    await expect(productDetailsPage.page).toHaveURL(/product_details\/4/);
  });

  test('PD05 Ver detalle de producto ID 5', async ({ productDetailsPage }) => {
    await productDetailsPage.open(5);
    await expect(productDetailsPage.page).toHaveURL(/product_details\/5/);
  });

  test('PD06 Ver detalle de producto ID 6', async ({ productDetailsPage }) => {
    await productDetailsPage.open(6);
    await expect(productDetailsPage.page).toHaveURL(/product_details\/6/);
  });

  test('PD07 Ver detalle de producto ID 7', async ({ productDetailsPage }) => {
    await productDetailsPage.open(7);
    await expect(productDetailsPage.page).toHaveURL(/product_details\/7/);
  });

  test('PD08 Ver detalle de producto ID 8', async ({ productDetailsPage }) => {
    await productDetailsPage.open(8);
    await expect(productDetailsPage.page).toHaveURL(/product_details\/8/);
  });

  test('PD09 Cambiar cantidad a 1 en detalle de producto', async ({ productDetailsPage }) => {
    await productDetailsPage.open(1);
    await productDetailsPage.setQuantity(1);
    const value = await productDetailsPage.quantityInput.first().inputValue();
    expect(value).toBe('1');
  });

  test('PD10 Cambiar cantidad a 2 en detalle de producto', async ({ productDetailsPage }) => {
    await productDetailsPage.open(1);
    await productDetailsPage.setQuantity(2);
    const value = await productDetailsPage.quantityInput.first().inputValue();
    expect(value).toBe('2');
  });

  test('PD11 Cambiar cantidad a 5 en detalle de producto', async ({ productDetailsPage }) => {
    await productDetailsPage.open(1);
    await productDetailsPage.setQuantity(5);
    const value = await productDetailsPage.quantityInput.first().inputValue();
    expect(value).toBe('5');
  });

  test('PD12 Cambiar cantidad a 10 en detalle de producto', async ({ productDetailsPage }) => {
    await productDetailsPage.open(1);
    await productDetailsPage.setQuantity(10);
    const value = await productDetailsPage.quantityInput.first().inputValue();
    expect(value).toBe('10');
  });

  test('PD13 Agregar al carrito desde detalle producto 1', async ({ productDetailsPage }) => {
    await productDetailsPage.open(1);
    await productDetailsPage.addToCart();
  });

  test('PD14 Agregar al carrito desde detalle producto 2', async ({ productDetailsPage }) => {
    await productDetailsPage.open(2);
    await productDetailsPage.addToCart();
  });

  test('PD15 Agregar al carrito desde detalle producto 3', async ({ productDetailsPage }) => {
    await productDetailsPage.open(3);
    await productDetailsPage.addToCart();
  });

  test('PD16 Agregar al carrito desde detalle producto 4', async ({ productDetailsPage }) => {
    await productDetailsPage.open(4);
    await productDetailsPage.addToCart();
  });

  test('PD17 Agregar al carrito desde detalle producto 5', async ({ productDetailsPage }) => {
    await productDetailsPage.open(5);
    await productDetailsPage.addToCart();
  });

  test('PD18 Detalle de producto carga cuerpo de página', async ({ productDetailsPage, page }) => {
    await productDetailsPage.open(1);
    await expect(page.locator('body')).toBeVisible();
  });

  test('PD19 Detalle de producto tiene campo cantidad', async ({ productDetailsPage }) => {
    await productDetailsPage.open(1);
    await expect(productDetailsPage.quantityInput).toBeVisible();
  });

  test('PD20 Detalle de producto tiene botón Add to cart', async ({ productDetailsPage }) => {
    await productDetailsPage.open(1);
    await expect(productDetailsPage.addToCartButton).toBeVisible();
  });
});
