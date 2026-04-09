import {test,expect} from "@playwright/test";
test("verify page title",async ({page})=>{
await page.goto("https://automationexercise.com/#google_vignette");
await expect(page).toHaveURL("https://automationexercise.com/#google_vignette");
 


})