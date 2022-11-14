import { test, expect, Browser, BrowserContext, Page, chromium } from "@playwright/test";
import Enviroment from "../../Enviroments/enviroments";
import CommonFunctions from "../../page/commonFunctions";
import loginPage from "../../page/loginPage";
import headerPage from "../../page/header";
import * as data from "../../Data/loginCredentials.json";
import { test as base } from '@playwright/test';



//Khai báo
// let header: headerPage; //Do not need this in this case
// let login: loginPage;
// let common: CommonFunctions;

// let browser: Browser;
// let context: BrowserContext;
// let page: Page;

//Setup browser
const _test = base.extend<{ LoginPage: loginPage }>({
    LoginPage: async ({ page }, use) => {
      const LoginPage = new loginPage(page);
      await LoginPage.goto(Enviroment.live);
      await use(LoginPage);
    },
  });
//Test case
_test.describe('Login Test', () =>{
    // test.beforeAll(async() => {
    //     browser = await chromium.launch({
    //         headless: false
    //     });
    //     context = await browser.newContext();
    //     // page = await context.newPage();
    //     // await page.goto(Enviroment.live);
    //     header = new headerPage(page);
    //     login = new loginPage(page);
    //     common = new CommonFunctions(page);
    // });

    // test.afterAll(async () => {
    //     console.log('Done test');
    //   });

    _test('Expect can Login', async ({LoginPage}) => {
        // console.log('test');
        // await LoginPage.goto(Enviroment.live)
        // await expect(page.url()).toHaveURL("https://accounts.shopbase.com/sign-in")
        // expect(page.url()).toContain("https://accounts.shopbase.com/sign-in")
        // await header.clickLoginBtn();
        // await login.enterEmail(data.email);
        // await login.enterPassword(data.pass);
        // await login.clickLoginBtn()
        // await page.waitForLoadState("networkidle");
        // const isWelcome = await common.checkWelcome;
        // expect(await isWelcome?.textContent()).toContain("Welcome");
        // // expect(await toasterx?.textContent()).toContain("Welcome");
    })
})

