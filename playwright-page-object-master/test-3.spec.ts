import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ubank.com.au/');
  await page.getByRole('link', { name: 'Calculators & tools' }).click();
  await page.getByRole('link', { name: 'Refinance calculator' }).click();
  await page.frameLocator('iframe[title="Refinance calculator"]').getByLabel('Estimated property value', { exact: true }).fill('1000000');
  await page.frameLocator('iframe[title="Refinance calculator"]').getByText('An investment').click(); 
  await page.frameLocator('iframe[title="Refinance calculator"]').getByLabel('Remaining loan term', { exact: true }).fill('10');  
  await page.frameLocator('iframe[title="Refinance calculator"]').getByLabel('Current loan balance', { exact: true }).fill('600000');
  await page.frameLocator('iframe[title="Refinance calculator"]').getByLabel('Current interest rate', { exact: true }).pressSequentially('6.5');
  await page.frameLocator('iframe[title="Refinance calculator"]').getByText('Fixed').click();
  await page.frameLocator('iframe[title="Refinance calculator"]').getByText('3').click();
  await page.frameLocator('iframe[title="Refinance calculator"]').getByRole('button', { name: 'Calculate savings' }).click();
  await page.frameLocator('iframe[title="Refinance calculator"]').getByText('You can save up to').click();
  await expect(page.frameLocator('iframe[title="Refinance calculator"]').getByText('You can save up to')).toBeVisible();
});