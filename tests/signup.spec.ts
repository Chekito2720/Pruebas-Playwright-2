import { test, expect } from '../src/fixtures';

test.describe('Signup / Registro de Usuario', () => {
  test('SU01 Página de signup carga después de click en signup', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.signup('Usuario Prueba', 'usuario@prueba.com');
    await expect(loginPage.page).toHaveURL(/signup/);
  });

  test('SU02 Formulario de signup tiene campo nombre', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.signupName).toBeVisible();
  });

  test('SU03 Formulario de signup tiene campo email', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.signupEmail).toBeVisible();
  });

  test('SU04 Formulario de signup tiene botón submit', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.signupButton).toBeVisible();
  });

  test('SU05 Campo nombre de signup acepta texto', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.signupName.fill('Juan Pérez');
    const value = await loginPage.signupName.inputValue();
    expect(value).toBe('Juan Pérez');
  });

  test('SU06 Campo email de signup acepta texto', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.signupEmail.fill('juan.perez@email.com');
    const value = await loginPage.signupEmail.inputValue();
    expect(value).toBe('juan.perez@email.com');
  });

  test('SU07 Signup con nombre largo', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.signup('A'.repeat(50), 'usuario@prueba.com');
    await expect(page).toHaveURL(/signup/);
  });

  test('SU08 Signup con email largo', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.signup('Usuario', 'a'.repeat(50) + '@test.com');
    await expect(page).toHaveURL(/signup/);
  });

  test('SU09 Cuerpo de página signup visible', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.signup('Usuario', 'usuario@prueba.com');
    await expect(page.locator('body')).toBeVisible();
  });

  test('SU10 Título de pestaña signup', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.signup('Usuario', 'usuario@prueba.com');
    await expect(page.title()).toContain('Automation Exercise');
  });
});
