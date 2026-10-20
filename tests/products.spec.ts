import { test, expect } from '../src/fixtures';

test.describe('Productos - Listado y Búsqueda', () => {
  test('PD01 Página de productos carga correctamente', async ({ productsPage }) => {
    await productsPage.open();
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('PD02 Al menos un producto tiene botón Add to cart', async ({ productsPage }) => {
    await productsPage.open();
    const count = await productsPage.getProductCount();
    expect(count).toBeGreaterThan(0);
  });

  test('PD03 Click en Add to cart del primer producto', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickAddToCart(0);
  });

  test('PD04 Click en Add to cart del segundo producto', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickAddToCart(1);
  });

  test('PD05 Click en View Product del primer producto', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickViewProduct(0);
  });

  test('PD06 Click en View Product del segundo producto', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickViewProduct(1);
  });

  test('PD07 Buscar producto existente "Blue Top"', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('Blue Top');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('PD08 Buscar producto existente "Dress"', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('Dress');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('PD09 Buscar producto existente "Tshirt"', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('Tshirt');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('PD10 Buscar producto existente "Jeans"', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('Jeans');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('PD11 Buscar producto existente "Saree"', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('Saree');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('PD12 Buscar producto inexistente', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('XYZ123Inexistente');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('PD13 Buscar con campo vacío', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('PD14 Buscar con caracteres especiales', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('@#$%');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('PD15 Contar productos en la página', async ({ productsPage }) => {
    await productsPage.open();
    const count = await productsPage.getProductCount();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThan(200);
  });

  test('PD16 Navegar a categoría Women por href', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/1');
    await expect(productsPage.page).toHaveURL(/category_products\/1/);
  });

  test('PD17 Navegar a categoría Men por href', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/3');
    await expect(productsPage.page).toHaveURL(/category_products\/3/);
  });

  test('PD18 Navegar a categoría Kids por href', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/4');
    await expect(productsPage.page).toHaveURL(/category_products\/4/);
  });

  test('PD19 Navegar a categoría Dress por href', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/1');
    await expect(productsPage.page).toHaveURL(/category_products\/1/);
  });

  test('PD20 Navegar a categoría Tops por href', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/2');
    await expect(productsPage.page).toHaveURL(/category_products\/2/);
  });

  test('PD21 Navegar a categoría Saree por href', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/7');
    await expect(productsPage.page).toHaveURL(/category_products\/7/);
  });

  test('PD22 Navegar a categoría Tshirts por href', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/3');
    await expect(productsPage.page).toHaveURL(/category_products\/3/);
  });

  test('PD23 Navegar a categoría Jeans por href', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/6');
    await expect(productsPage.page).toHaveURL(/category_products\/6/);
  });

  test('PD24 Navegar a marca Polo por href', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/Polo');
    await expect(productsPage.page).toHaveURL(/brand_products\/Polo/);
  });

  test('PD25 Navegar a marca H&M por href', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/H&M');
    await expect(productsPage.page).toHaveURL(/brand_products\/H/);
  });

  test('PD26 Navegar a marca Madame por href', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/Madame');
    await expect(productsPage.page).toHaveURL(/brand_products\/Madame/);
  });
});
