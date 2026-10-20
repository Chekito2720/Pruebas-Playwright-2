import { test, expect } from '../src/fixtures';

test.describe('Contact Us - Formulario', () => {
  test('CU01 Página de Contact Us carga correctamente', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await expect(contactUsPage.nameInput).toBeVisible();
    await expect(contactUsPage.emailInput).toBeVisible();
    await expect(contactUsPage.subjectInput).toBeVisible();
    await expect(contactUsPage.messageTextarea).toBeVisible();
    await expect(contactUsPage.submitButton).toBeVisible();
  });

  test('CU02 Campo nombre acepta texto', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await contactUsPage.nameInput.fill('Usuario Prueba');
    const value = await contactUsPage.nameInput.inputValue();
    expect(value).toBe('Usuario Prueba');
  });

  test('CU03 Campo email acepta texto', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await contactUsPage.emailInput.fill('usuario@prueba.com');
    const value = await contactUsPage.emailInput.inputValue();
    expect(value).toBe('usuario@prueba.com');
  });

  test('CU04 Campo asunto acepta texto', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await contactUsPage.subjectInput.fill('Consulta sobre producto');
    const value = await contactUsPage.subjectInput.inputValue();
    expect(value).toBe('Consulta sobre producto');
  });

  test('CU05 Campo mensaje acepta texto', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await contactUsPage.messageTextarea.fill('Este es un mensaje de prueba para el formulario de contacto.');
    const value = await contactUsPage.messageTextarea.inputValue();
    expect(value).toBe('Este es un mensaje de prueba para el formulario de contacto.');
  });

  test('CU06 Botón Submit visible', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await expect(contactUsPage.submitButton).toBeVisible();
  });

  test('CU07 Botón Submit habilitado', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await expect(contactUsPage.submitButton).toBeEnabled();
  });

  test('CU08 Enviar formulario de contacto completo', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await contactUsPage.submitContactForm({
      name: 'Usuario Prueba',
      email: 'usuario@prueba.com',
      subject: 'Consulta sobre producto',
      message: 'Mensaje de prueba para el formulario de contacto.',
    });
    await expect(contactUsPage.page).toHaveURL(/contact_us/);
  });

  test('CU09 Enviar formulario con nombre vacío', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await contactUsPage.submitContactForm({
      name: '',
      email: 'usuario@prueba.com',
      subject: 'Consulta',
      message: 'Mensaje de prueba.',
    });
    await expect(contactUsPage.page).toHaveURL(/contact_us/);
  });

  test('CU10 Enviar formulario con email vacío', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await contactUsPage.submitContactForm({
      name: 'Usuario',
      email: '',
      subject: 'Consulta',
      message: 'Mensaje de prueba.',
    });
    await expect(contactUsPage.page).toHaveURL(/contact_us/);
  });

  test('CU11 Enviar formulario con asunto vacío', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await contactUsPage.submitContactForm({
      name: 'Usuario',
      email: 'usuario@prueba.com',
      subject: '',
      message: 'Mensaje de prueba.',
    });
    await expect(contactUsPage.page).toHaveURL(/contact_us/);
  });

  test('CU12 Enviar formulario con mensaje vacío', async ({ contactUsPage }) => {
    await contactUsPage.open();
    await contactUsPage.submitContactForm({
      name: 'Usuario',
      email: 'usuario@prueba.com',
      subject: 'Consulta',
      message: '',
    });
    await expect(contactUsPage.page).toHaveURL(/contact_us/);
  });

  test('CU13 Cuerpo de página contacto visible', async ({ contactUsPage, page }) => {
    await contactUsPage.open();
    await expect(page.locator('body')).toBeVisible();
  });

  test('CU14 Título de pestaña contacto', async ({ contactUsPage, page }) => {
    await contactUsPage.open();
    await expect(page.title()).toContain('Automation Exercise');
  });
});
