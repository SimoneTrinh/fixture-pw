import { Page } from "@playwright/test";

export default class CommonFunctions{
    
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public get checkWelcome(){
        return this.page.waitForSelector("//h2[contains(text(), 'Welcome')]");
    }

    // private isLogin: boolean = false 

    // public get bool(){
    //     this.page.waitForSelector("//h2[contains(text(), 'Welcome')]");
    //     return this.isLogin = true;
    // }
}