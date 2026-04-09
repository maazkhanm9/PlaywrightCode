import { test, expect,Locator } from '@playwright/test';

test('Sign Up', async ({ page, context }) => {
  await page.goto('https://www.careerflow.ai/', {
    waitUntil: 'domcontentloaded'
  });
  await expect(page).toHaveURL(/careerflow/);

  await page.getByRole('link', { name: 'Sign up', exact: true }).click();
  await page.waitForURL(/signup/);

await expect(page.locator("//h2[@class='_subTitle_1udd7_144']")).toBeVisible({ timeout: 10000 })

//Filling Details for Sign Up
await page.getByPlaceholder('First Name').fill('Max');
await page.locator("//input[@id='lname']").fill('Pain');
await page.locator("//div[@id='rc-tabs-0-panel-register']//div//input[@id='email']").fill('Max123@gmail.com');
await expect(page.locator("//input[@placeholder='Enter a Password']")).toBeVisible({ timeout: 2000 });
await page.locator("//input[@placeholder='Enter a Password']").fill('1234567@Xy');
await page.locator("//input[@type='checkbox']").click();
await page.locator("button[aria-label='Sign Up']").click();
await expect(page.getByPlaceholder('First Name')).toHaveValue('Max');


})
