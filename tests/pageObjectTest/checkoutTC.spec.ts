import { test, expect, Browser, BrowserContext, Page, chromium } from "@playwright/test";
import Enviroment from "../../Enviroments/enviroments";
import CommonFunctions from "../../page/commonFunctions";
import loginPage from "../../page/loginPage";
// import headerPage from "../../page/header";
import * as data from "../../Data/loginCredentials.json";
import checkoutPage from "../../page/checkoutPage";
import dashboardPage from "../../page/dashboardPage";
import shopCollectionPage from "../../page/shopCollectionPage";
import productDetailPage from "../../page/productDetailPage";
import cartPage from "../../page/cartPage";


//Khai báo
// let header: headerPage; //Do not need this in this case
let login: loginPage;
let common: CommonFunctions;
let dashboard: dashboardPage;
let shopCollection: shopCollectionPage;
let productDetail: productDetailPage;
let cart: cartPage;
let checkout: checkoutPage;

let browser: Browser;
let context: BrowserContext;
let page: Page;

//Setup browser
test.beforeAll(async() => {
    browser = await chromium.launch({
        headless: false
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(Enviroment.live);
    
    // header = new headerPage(page);
    login = new loginPage(page);
    common = new CommonFunctions(page);
    dashboard = new dashboardPage(page);
    shopCollection = new shopCollectionPage(page);
    productDetail = new productDetailPage(page);
    cart = new cartPage(page);
    checkout = new checkoutPage(page);
});

//Test case
test.describe('Checkout Test', () =>{
    test('Expect can checkout and show order information', async () => {
        await login.enterEmail(data.email);
        await login.enterPassword(data.pass);
        await login.clickLoginBtn()
        await login.gotoMyShopDashboard();
        const isWelcome = await common.checkWelcome;
        expect(await isWelcome?.textContent()).toContain("Welcome");
        await dashboard.clickOrdersBtn();
        await dashboard.gotoFirstOrderDetailPage();

        //Add to cart
        // await page.goto("https://simoneshop.onshopbase.com/collections/summer-sale");
        await dashboard.gotoCollectionPage();
        await shopCollection.clickItem01();
        await productDetail.clickAddToCartBtn() //This need to wait for selector in [page].ts file
        await productDetail.gotoCartPage()
        await Promise.all([cart.clickCheckoutBtn(), page.waitForNavigation()])

        //Checkout screen
        await checkout.enterUserEmail(data.email);
        await checkout.enterFirstName("Trinh");
        await checkout.enterLastName("Long");
        await checkout.enterStreetAddress("Ha Noi");
        await checkout.enterZipcode("100000");
        await checkout.enterCity("Ha Noi");
        await checkout.enterPhone("083738384840");
        await checkout.enterCC("4242 4242 4242 4242");
        await checkout.enterCardHolder("Long");
        await checkout.enterExp("05/25");
        await checkout.enterCVC("888")
        await checkout.clickPlaceOrderBtn();
        const isThankYou = await checkout.checkThankYou;
        expect(await isThankYou?.textContent()).toContain('Thank you!');
        await checkout.logOrderSummary()

        await page.goto("https://glowdernize.onshopbase.com/admin/")
        await page.waitForLoadState("networkidle");
        await dashboard.clickOrdersBtn()
        await dashboard.gotoFirstOrderDetailPage();
        await page.pause();        
    })
})

// test.describe('Go to Orders, get the first order information', () =>{
//     test('Expect can get first order information', async () => {
//         await dashboard.clickOrdersBtn();
//         await page.waitForLoadState("networkidle");
//         await dashboard.gotoFirstOrderDetailPage();
        
//     })
// })


test.afterAll(async () => {
    console.log('Done test');
  });