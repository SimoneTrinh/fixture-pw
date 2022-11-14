import { Page } from "@playwright/test";

export default class productDetailPage{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public get addToCartBtn(){
        return this.page.$(`//span[text()='Add to cart']`);
    }

    public async clickAddToCartBtn(){
        await this.page.waitForSelector(`//span[text()='Add to cart']`, {state: "visible"});
        const addToCartElement = await this.addToCartBtn;
        await addToCartElement?.click();
        await this.page.waitForLoadState("networkidle");

    }

    public async gotoCartPage(){
        const link = "https://glowdernize.onshopbase.com/cart";
        await this.page.goto(link);
    }
}