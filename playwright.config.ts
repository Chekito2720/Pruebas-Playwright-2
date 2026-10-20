import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  outputDir: 'target/test-results',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'target/report', open: 'never' }],
  ],
  use: {
    baseURL: 'https://www.automationexercise.com',
    testIdAttribute: 'data-qa',
    trace: 'retain-on-failure',
    screenshot: 'off',
    viewport: { width: 1366, height: 900 },
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
