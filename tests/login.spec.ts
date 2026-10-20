import { test, expect } from '../src/fixtures';
import { VALID_USER } from '../src/pages/LoginPage';

test.describe('Login - Formulario y Validaciones', () => {
  test('LG01 Página de login carga correctamente', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.loginEmail).toBeVisible();
    await expect(loginPage.loginPassword).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('LG02 Campo de email está visible en login', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.loginEmail).toBeVisible();
  });

  test('LG03 Campo de contraseña está visible en login', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.loginPassword).toBeVisible();
  });

  test('LG04 Botón de login está visible', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('LG05 Formulario de signup tiene campo nombre', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.signupName).toBeVisible();
  });

  test('LG06 Formulario de signup tiene campo email', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.signupEmail).toBeVisible();
  });

  test('LG07 Formulario de signup tiene botón signup', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.signupButton).toBeVisible();
  });

  test('LG08 Login con email inválido se queda en login', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.login('invalido@email.com', 'password123');
    await expect(page).toHaveURL(/login/);
  });

  test('LG09 Login con contraseña incorrecta se queda en login', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.login(VALID_USER.email, 'contraseña_incorrecta');
    await expect(page).toHaveURL(/login/);
  });

  test('LG10 Login con ambos campos vacíos se queda en login', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.login('', '');
    await expect(page).toHaveURL(/login/);
  });

  test('LG11 Login con solo email se queda en login', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.login(VALID_USER.email, '');
    await expect(page).toHaveURL(/login/);
  });

  test('LG12 Login con solo contraseña se queda en login', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.login('', VALID_USER.password);
    await expect(page).toHaveURL(/login/);
  });

  test('LG13 Signup con nombre y email válidos', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.signup('Usuario Prueba', 'usuario@prueba.com');
    await expect(page).toHaveURL(/signup/);
  });

  test('LG14 Campo email de login acepta texto', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.loginEmail.fill('test@test.com');
    const value = await loginPage.loginEmail.inputValue();
    expect(value).toBe('test@test.com');
  });

  test('LG15 Campo contraseña de login acepta texto', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.loginPassword.fill('myPass123');
    const value = await loginPage.loginPassword.inputValue();
    expect(value).toBe('myPass123');
  });

  test('LG16 Botón login está habilitado', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.loginButton).toBeEnabled();
  });

  test('LG17 Botón signup está habilitado', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.signupButton).toBeEnabled();
  });

  test('LG18 Cuerpo de página login visible', async ({ loginPage, page }) => {
    await loginPage.open();
    await expect(page.locator('body')).toBeVisible();
  });

  test('LG19 Título de pestaña login', async ({ loginPage, page }) => {
    await loginPage.open();
    const title = await page.title();
    expect(title).toContain('Automation Exercise');
  });
});
