import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('password').fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
});

test('test2', async ({ browser}) => {
  const page = await browser.newPage({storageState: 'storageState.json'})
  await page.goto('https://practicetestautomation.com/practice-test-login/'); 
  // Save signed-in state to 'storageState.json'.
  await expect(page.getByLabel('Username')).toHaveCount(0)
});
