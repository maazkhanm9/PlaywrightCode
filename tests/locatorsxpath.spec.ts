import{test,expect, Locator} from "@playwright/test"
test("Xpath Axes demo",async({page})=>{

page.goto('https://rahulshettyacademy.com/blog/index.php/2023/06/29/playwright-interview-questions/');
const SubscribeButton:Locator=page.locator("//button[text()='Subscribe Now']");
await expect(SubscribeButton).toHaveText('Subscribe Now');

})