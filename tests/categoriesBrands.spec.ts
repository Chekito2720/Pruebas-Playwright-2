import { test, expect } from '../src/fixtures';

test.describe('Productos - Categorías y Marcas Extendidas', () => {
  test('CAT01 Navegar a categoría Women (Dress)', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/1');
    await expect(productsPage.page).toHaveURL(/category_products\/1/);
  });

  test('CAT02 Navegar a categoría Women (Tops)', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/2');
    await expect(productsPage.page).toHaveURL(/category_products\/2/);
  });

  test('CAT03 Navegar a categoría Women (Saree)', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/7');
    await expect(productsPage.page).toHaveURL(/category_products\/7/);
  });

  test('CAT04 Navegar a categoría Men (Tshirts)', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/3');
    await expect(productsPage.page).toHaveURL(/category_products\/3/);
  });

  test('CAT05 Navegar a categoría Men (Jeans)', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/6');
    await expect(productsPage.page).toHaveURL(/category_products\/6/);
  });

  test('CAT06 Navegar a categoría Kids (Dress)', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/4');
    await expect(productsPage.page).toHaveURL(/category_products\/4/);
  });

  test('CAT07 Navegar a categoría Kids (Tops & Shirts)', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/5');
    await expect(productsPage.page).toHaveURL(/category_products\/5/);
  });

  test('CAT08 Volver a productos desde categoría', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickCategory('/category_products/1');
    await productsPage.open();
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('BR01 Navegar a marca Polo', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/Polo');
    await expect(productsPage.page).toHaveURL(/brand_products\/Polo/);
  });

  test('BR02 Navegar a marca H&M', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/H&M');
    await expect(productsPage.page).toHaveURL(/brand_products\/H/);
  });

  test('BR03 Navegar a marca Madame', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/Madame');
    await expect(productsPage.page).toHaveURL(/brand_products\/Madame/);
  });

  test('BR04 Navegar a marca Mast & Harbour', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/Mast%20&%20Harbour');
    await expect(productsPage.page).toHaveURL(/brand_products\/Mast/);
  });

  test('BR05 Navegar a marca Babyhug', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/Babyhug');
    await expect(productsPage.page).toHaveURL(/brand_products\/Babyhug/);
  });

  test('BR06 Navegar a marca Allen Solly Junior', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/Allen%20Solly%20Junior');
    await expect(productsPage.page).toHaveURL(/brand_products\/Allen/);
  });

  test('BR07 Navegar a marca Kookie Kids', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/Kookie%20Kids');
    await expect(productsPage.page).toHaveURL(/brand_products\/Kookie/);
  });

  test('BR08 Navegar a marca Biba', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/Biba');
    await expect(productsPage.page).toHaveURL(/brand_products\/Biba/);
  });

  test('BR09 Volver a productos desde marca', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.clickBrand('/brand_products/Polo');
    await productsPage.open();
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('SE01 Buscar "Blue Top" y verificar URL', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('Blue Top');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('SE02 Buscar "Men Tshirt" y verificar URL', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('Men Tshirt');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('SE03 Buscar "Sleeveless Dress" y verificar URL', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('Sleeveless Dress');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('SE04 Buscar "Winter Top" y verificar URL', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('Winter Top');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('SE05 Buscar "Summer White Top" y verificar URL', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('Summer White Top');
    await expect(productsPage.page).toHaveURL(/products/);
  });

  test('SE06 Buscar "Fancy Green Top" y verificar URL', async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.search('Fancy Green Top');
    await expect(productsPage.page).toHaveURL(/products/);
  });
});
