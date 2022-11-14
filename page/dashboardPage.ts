import { Page } from "@playwright/test";

export default class dashboardPage{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public get ordersBtn(){
        return this.page.$(`//span[contains(text(), "Orders")]`);
    }

    public async clickOrdersBtn(){
        const ordersElement = await this.ordersBtn;
        await ordersElement?.click();
    }

    public get firstOrderBtn(){
        return this.page.$(`//div[@class="orders-list m-b"]//tbody//tr[1]//td[2]//a`);
    }

    public async gotoFirstOrderDetailPage(){
        await this.page.waitForSelector(`//div[@class="orders-list m-b"]//tbody//tr[1]//td[2]//a`, {state: "visible"});
        const const_firstOrderBtn = await this.firstOrderBtn;
        return const_firstOrderBtn?.click();
        await this.page.waitForLoadState("networkidle");
    }

    public async gotoCollectionPage(){
        const link = "https://glowdernize.onshopbase.com/collections/all";
        await this.page.goto(link);
    }

    public async clickProductsBtn(){
        await this.page.locator(`//span[contains(text(), "Products")]`).click()
        await this.page.waitForSelector(`//span[contains(text(), "Add product")]`, {state: "visible"})
    }

    // public async getFirstOrderInformation(){
    //     const itemName = await this.page.innerText(`//div[@class="unfulfilled-card-container"]//a`);
    //     const itemPrice = await this.page.innerText(`//div[@class="unfulfilled-card-container"]//div[2]//div[1]//span[1]//span`);

    // }
}