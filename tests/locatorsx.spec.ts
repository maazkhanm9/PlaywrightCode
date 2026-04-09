import{test,expect,Locator} from "@playwright/test"
test("Xpath locators",async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const logo:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();
const products:Locator=page.locator("//h2/a[@href='/build-your-own-computer']");
const productsCount:number=await products.count();
console.log("No of Computer related products",productsCount);
expect(productsCount).toBeGreaterThan(0);
await products.first().textContent();
console.log("First computer name",await products.first().textContent());
let productTitles: string[] =await products.allTextContents();
for(let pt of productTitles){
    console.log(pt);
}
})