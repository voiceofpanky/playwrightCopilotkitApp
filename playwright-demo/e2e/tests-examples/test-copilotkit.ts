import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://copilotkit-reactapp-web.vercel.app/');
});

test.describe('New Todo', () => {

});
