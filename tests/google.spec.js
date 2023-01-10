import { test, expect } from '../pages/basetest';

test.only('test', async ({ homepage, browser }) => {
   await homepage.navigate_to_url()
   const page = await browser.newPage();
   await page.goto('https://playwright.dev/docs/test-fixtures#fixture-timeout')
});
