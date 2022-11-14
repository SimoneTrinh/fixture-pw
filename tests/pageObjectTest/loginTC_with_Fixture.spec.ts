import Enviroment from "../../Enviroments/enviroments";
import loginPage from "../../page/loginPage";
import { expect, test as base } from "@playwright/test";
import * as data from "../../Data/loginCredentials.json";

const _test = base.extend<{ LoginPage: loginPage }>({
  LoginPage: async ({ page }, use) => {
    const LoginPage = new loginPage(page);
    await LoginPage.goto(Enviroment.live);
    await LoginPage.enterEmail(data.email);
    await LoginPage.enterPassword(data.pass);
    await LoginPage.clickLoginBtn();
    await LoginPage.gotoMyShopDashboard();
    const isWelcome = await LoginPage.checkWelcome;
    expect(await isWelcome?.textContent()).toContain("Welcome");
    // expect(await toasterx?.textContent()).toContain("Welcome");
    await use(LoginPage);
  },
});
//Test case
_test.describe("Open browser and Login with no code", () => {
  _test("Expect can Login", async ({ LoginPage }) => {});
});
