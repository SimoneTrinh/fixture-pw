import { Page } from "@playwright/test";

export default class shopCollectionPage{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public get item01(){
        return this.page.$(`//span[text()="90 Degree Rotatable Mosquito Killer Lamp"]`);
    }

    public async clickItem01(){
        await this.page.waitForSelector(`//span[text()="90 Degree Rotatable Mosquito Killer Lamp"]`, {state: "visible"});
        const item01Element = await this.item01;
        await item01Element?.waitForSelector                    
        await item01Element?.click();
    }
    
}