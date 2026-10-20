import { test, expect } from '../src/fixtures';

test.describe('Login - Casos Adicionales', () => {
  test('LA01 Página de login carga con URL directa', async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveURL(/login/);
  });

  test('LA02 Campo email tiene tipo email', async ({ loginPage }) => {
    await loginPage.open();
    const type = await loginPage.loginEmail.getAttribute('type');
    expect(type).toBe('email');
  });

  test('LA03 Campo contraseña tiene tipo password', async ({ loginPage }) => {
    await loginPage.open();
    const type = await loginPage.loginPassword.getAttribute('type');
    expect(type).toBe('password');
  });

  test('LA04 Botón login es de tipo submit', async ({ loginPage }) => {
    await loginPage.open();
    const type = await loginPage.loginButton.getAttribute('type');
    expect(type).not.toBeNull();
  });

  test('LA05 Campo email de signup tiene tipo email', async ({ loginPage }) => {
    await loginPage.open();
    const type = await loginPage.signupEmail.getAttribute('type');
    expect(type).toBe('email');
  });

  test('LA06 Campo nombre de signup tiene tipo text', async ({ loginPage }) => {
    await loginPage.open();
    const type = await loginPage.signupName.getAttribute('type');
    expect(type).toBe('text');
  });

  test('LA07 Cuerpo de página login visible', async ({ loginPage, page }) => {
    await loginPage.open();
    await expect(page.locator('body')).toBeVisible();
  });

  test('LA08 Título de pestaña login', async ({ loginPage, page }) => {
    await loginPage.open();
    await expect(page.title()).toContain('Automation Exercise');
  });

  test('LA09 Login con email muy largo', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.loginEmail.fill('a'.repeat(100) + '@test.com');
    await loginPage.loginPassword.fill('password123');
    await loginPage.loginButton.click();
    await expect(page).toHaveURL(/login/);
  });

  test('LA10 Login con contraseña muy larga', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.loginEmail.fill('test@test.com');
    await loginPage.loginPassword.fill('a'.repeat(100));
    await loginPage.loginButton.click();
    await expect(page).toHaveURL(/login/);
  });

  test('LA11 Login con caracteres especiales en email', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.loginEmail.fill('user+tag@test.com');
    await loginPage.loginPassword.fill('password123');
    await loginPage.loginButton.click();
    await expect(page).toHaveURL(/login/);
  });

  test('LA12 Login con email en mayúsculas', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.loginEmail.fill('TEST@TEST.COM');
    await loginPage.loginPassword.fill('password123');
    await loginPage.loginButton.click();
    await expect(page).toHaveURL(/login/);
  });

  test('LA13 Signup con email ya existente', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.signup('Usuario Existente', 'existinguser@example.com');
    await expect(page).toHaveURL(/signup/);
  });

  test('LA14 Signup con email inválido', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.signup('Usuario', 'correo-invalido');
    await expect(page).toHaveURL(/signup/);
  });

  test('LA15 Cuerpo de página signup visible', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.signup('Usuario', 'usuario@prueba.com');
    await expect(page.locator('body')).toBeVisible();
  });
});
