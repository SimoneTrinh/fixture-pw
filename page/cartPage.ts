import { Page } from "@playwright/test";

export default class cartPage{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public get checkoutBtn(){
        return this.page.$(`//button[@name='checkout']`);
    }

    public async clickCheckoutBtn(){
        await this.page.waitForSelector(`//button[@name='checkout']`, {state: "visible"});
        const checkoutBtnElement = await this.checkoutBtn;
        await checkoutBtnElement?.click();
    }
}