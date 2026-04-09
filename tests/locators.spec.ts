import{test,expect,Locator} from "@playwright/test"
test("Verify playwright locators",async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
  const logo:Locator= page.getByAltText("nopCommerce demo store")
  await expect(logo).toBeVisible();
  await expect(page.getByText("Welcome to our store")).toBeVisible();
await page.getByRole("link",{name:'Register'}).click();
//await expect(page.getByText('Register')).toBeVisible();
await page.getByTestId('FirstName').fill("John");
await page.getByLabel('LastName').fill("Wick");
await page.getByLabel('Email').fill("xyz@gmail.com");


})