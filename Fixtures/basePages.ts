import { test as baseTest } from "@playwright/test";
import dashboardPage from "../page/dashboardPage";
import loginPage from "../page/loginPage";
import productPage from "../page/productsPage";
import Enviroment from "../Enviroments/enviroments";
import * as data from "../Data/loginCredentials.json";

const _test = baseTest.extend<{
  LoginPage: loginPage;
  DashBoardPage: dashboardPage;
  ProductPage: productPage;
}>({
  LoginPage: async ({ page }, use) => {
    const LoginPage = new loginPage(page);
    await LoginPage.goto(Enviroment.live);
    await LoginPage.enterEmail(data.email);
    await LoginPage.enterPassword(data.pass);
    await LoginPage.clickLoginBtn();
    await LoginPage.selectShopbaseShop();
    await LoginPage.isWelcome();
    await use(LoginPage);
  },

  DashBoardPage: async ({ page }, use) => {
    await use(new dashboardPage(page));
  },

  ProductPage: async ({ page }, use) => {
    await use(new productPage(page));
  },
});

export default _test;
export const expect = _test.expect;
